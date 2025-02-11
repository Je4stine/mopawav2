import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./screens/About/index";
import Blogs from "./screens/Blogs/Blogs";
import Customization from "./screens/Customization/Cutomization";
import Faq from "./screens/Faq/Faq";
import Products from "./screens/Products/Products";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import Joint from "./screens/Joint/Joint";
import ScrollToTop from "./utils/Scrolltop";
import BlogDetails from "./screens/Blogs/BlogDetails";
import Stand from "./screens/Stand/Stand";
import Powerbank from "./screens/Powerbank/Powerbank";
import Station from "./screens/DesktopStation/Station";
import Eightslot from "./screens/Products/Eightslot";
import Twelveslot from "./screens/Products/TwelveSlot";
import Stackable from "./screens/Products/Stackable";
import Privacy from "./screens/Privacy/Privacy";
import ContactUs from "./screens/Contacts/ContactUs";
import Warranty from "./screens/Warranty/Warranty";
import Refererral from "./screens/Referrals/Refererral";
import AmbassadorHome from "./screens/Referrals/AmbassadorHome";
import Login from "./screens/Referrals/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/customs" element={<Customization />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/products" element={<Products />} />
          <Route path="/joint" element={<Joint />} />
          <Route path="/station" element={<Joint />} />
          <Route path="/stand" element={<Stand />} />
          <Route path="/powerbank" element={<Powerbank />} />
          <Route path="/desktopstation" element={<Station />} />
          <Route path="/products/details" element={<ProductDetails />} />
          <Route path="/blog/:id/:name" element={<BlogDetails />} />
          <Route path="/eightslot" element={<Eightslot />} />
          <Route path="/twelveslot" element={<Twelveslot />} />
          <Route path="/stackable" element={<Stackable />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/ambassador/signup" element={<Refererral />} />
          <Route path="/ambassador/signin" element={<Login />} />
          <Route path="/ambassador/home" element={<AmbassadorHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
