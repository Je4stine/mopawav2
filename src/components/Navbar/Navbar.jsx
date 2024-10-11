import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import Mopawalogo from '../../assets/images/mopawalogo.png';
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selected, setSelected] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch =()=>{
    setSearchOpen(!searchOpen)
  }

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setSelected(!selected);
  };

  return (
    <div className={`fixed top-0 z-[11] w-full flex items-center justify-between px-4 lg:px-10 h-[80px] shadow-sm ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <MdMenu size={40} onClick={handleMenu} className={`${isScrolled ? "text-black" : "text-white"} ml-2`} />
      </div>


      {/* Logo Section */}
      <a href="/" className="flex items-center">
        <img src={Mopawalogo} alt="logo" className="h-[50px] mr-2" />
        <p className={`font-bold text-2xl lg:text-3xl ${isScrolled ? "text-black" : "text-white"}`}>Mopawa</p>
      </a>

      {/* Navigation Links */}
      <nav className={`font-bold lg:flex items-center hidden `}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled ? "text-black" : "text-white"} mx-4 hover:bg-yellow-400 hover:rounded-md py-2 px-3 hover:text-white`}>Home</NavLink>
        <div className="relative group mx-4">
          <NavLink to="/products" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled ? "text-black" : "text-white"} py-2 px-3 hover:bg-yellow-400 hover:rounded-md hover:text-white`}>Products</NavLink>
          <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            <ul className="py-2">
              <li><NavLink to="/desktopstation" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Desktop station</NavLink></li>
              <li><NavLink to="/joint" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Joint Entrepreneurship</NavLink></li>
              <li><NavLink to="/stand" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Stand</NavLink></li>
              <li><NavLink to="/powerbank" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Powerbanks</NavLink></li>
              <li><a href="/" target="_blank" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Admin panel</a></li>
            </ul>
          </div>
        </div>
        <NavLink to="/customs" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled ? "text-black" : "text-white"} mx-4 hover:bg-yellow-400 hover:rounded-md py-2 px-3 hover:text-white`}>Customization</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled ? "text-black" : "text-white"} mx-4 hover:bg-yellow-400 hover:rounded-md py-2 px-3 hover:text-white`}>Blogs</NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled ? "text-black" : "text-white"} mx-4 hover:bg-yellow-400 hover:rounded-md py-2 px-3 hover:text-white`}>FAQs</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled ? "text-black" : "text-white"} mx-4 hover:bg-yellow-400 hover:rounded-md py-2 px-3 hover:text-white`}>About Us</NavLink>
      </nav>

      {/* Search and Menu for Large Screens */}
      <div className="hidden lg:flex items-center">
        {
          
        }
        <div>
          {
            searchOpen?<input type="text" className=" rounded-xl mr-5" placeholder="Search...."/>:<div/>

          }
        </div>
        <div onClick={openSearch}>
          {
            searchOpen? <IoMdClose size={30} className={`${isScrolled ? "text-black" : "text-white"} mr-4`} />:<IoSearch size={30} className={`${isScrolled ? "text-black hover:cursor-pointer" : "text-white hover:cursor-pointer"} mr-4`} />
          }
        </div>
        <MdMenu size={30} className={`${isScrolled ? "text-black" : "text-white"}`} />
      </div>

      {/* Mobile Dropdown Menu */}
      {selected && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white z-10">
          <ul className="flex flex-col">
            <li><NavLink to="/" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Home</NavLink></li>
            <li><NavLink to="/products" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Products</NavLink></li>
            <li><NavLink to="/customs" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Customization</NavLink></li>
            <li><NavLink to="/blog" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Blogs</NavLink></li>
            <li><NavLink to="/faq" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">FAQs</NavLink></li>
            <li><NavLink to="/about" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">About Us</NavLink></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
