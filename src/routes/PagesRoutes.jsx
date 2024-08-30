import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Shop from '../Pages/Shop'
import GetApp from '../Components/GetApp'
import Blog from '../Pages/Blog'
import Services from '../Pages/Services'
import Contacts from '../Pages/Contacts'

export default function PagesRoutes() {
  return (
    <div className='bg-slate-200'>
      <Router>
        <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/shop' element={<GetApp/>}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/contact' element={<Contacts/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  )
}
