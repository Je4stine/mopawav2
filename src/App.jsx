import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './screens/About/index'
import Blogs from './screens/Blogs/Blogs'
import Customization from './screens/Customization/Cutomization'
import Faq from './screens/Faq/Faq'
import Products from './screens/Products/Products'
import ProductDetails from './screens/ProductDetails/ProductDetails'
import Joint from './screens/Joint/Joint'
import ScrollToTop from './utils/Scrolltop'
import BlogDetails from './screens/Blogs/BlogDetails'

function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blogs/>}/>
            <Route path='/customs' element={<Customization/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/joint' element={<Joint/>}/>
            <Route path='/desktopstation' element={<Joint/>}/>
            <Route path='/products/details' element={<ProductDetails/>}/>
            <Route path='/blog/:id/:name' element={<BlogDetails/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
