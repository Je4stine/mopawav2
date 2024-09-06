import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './screens/About/index'
import Blogs from './screens/Blogs/Blogs'
import Customization from './screens/Customization/Cutomization'
import Faq from './screens/Faq/Faq'
import Products from './screens/Products/Products'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blogs/>}/>
            <Route path='/customs' element={<Customization/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/products' element={<Products/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
