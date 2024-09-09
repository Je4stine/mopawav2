import { NavLink } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import Mopawalogo from '../../assets/images/mopawalogo.png'
import { useEffect, useState } from "react";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
  const [ selected, setSelected] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenu =()=>{
    setSelected(!selected)
  };

  return (
    <div className={`fixed top-0 z-[11] w-full flex flex-row lg:justify-between lg:px-10 items-center h-[80px] shadow-sm ${isScrolled ? 'bg-white h-[80px]' : 'bg-transparent'}`}>
       <div onClick={handleMenu}><MdMenu size={50} className={`${isScrolled?"text-black":"text-white"} lg:hidden inline-block ml-5 mr-5`}/></div>
        <div className=" flex flex-row items-center">
            <img src={Mopawalogo} alt="logo" className="h-[50px]"/>
            <p className={` font-bold text-3xl ${isScrolled? "text-black":"text-white"}`}>Mopawa</p>
        </div>
        <div className=" flex flex-row items-center w-full justify-end">
            <nav className=" font-bold lg:flex items-center hidden">
                    <NavLink to ="/" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled?"text-black":"text-white"} mx-10 hover:text-white hover:bg-yellow-400 hover:rounded-md py-2 px-3` }>Home</NavLink>
      {/* Products with Dropdown */}
          <div className="relative group mx-10">
                    <NavLink to="/products" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled ? "text-black" : "text-white"} hover:text-white hover:bg-yellow-400 hover:rounded-md py-2 px-3`}>
                        Products
                    </NavLink>
                    
                    {/* Dropdown menu */}
                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 invisible transition-all duration-300 ease-in-out transform translate-y-[-10px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                        <ul className="py-2 ">
                            <li>
                                <NavLink to="/products/product1" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Desktop station</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/product2" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Joint Entrepreneurship</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/product3" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Stand</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/product3" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Powerbanks</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products/product3" className="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Admin panel</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>                    
                <NavLink to ="/customs" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled?"text-black":"text-white"} mx-10 hover:text-white hover:bg-yellow-400 hover:rounded-md py-2 px-3`}>Customization</NavLink>
                    <NavLink to ="/blog" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled?"text-black":"text-white"} mx-10 hover:text-white hover:bg-yellow-400 hover:rounded-md py-2 px-3`}>Blogs</NavLink>
                    <NavLink to ="/faq" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled?"text-black":"text-white"} mx-10 hover:text-white hover:bg-yellow-400 hover:rounded-md py-2 px-3`}>FAQs</NavLink>
                    <NavLink to ="/about" className={({ isActive }) => isActive ? 'text-white bg-yellow-400 p-2 rounded-md' : `${isScrolled?"text-black":"text-white"} mx-10 hover:text-white hover:bg-yellow-400 hover:rounded-md py-2 px-3`}>About Us</NavLink>
            </nav>
            <div className=" lg:flex flex-row items-center hidden">
                <IoSearch size={30} className={`${isScrolled?"text-black":"text-white"} mr-10`}/>
                <MdMenu size={30} className={`${isScrolled?"text-black":"text-white"}`}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar