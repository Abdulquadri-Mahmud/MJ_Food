import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import React from 'react'
import Home from '../Home/Home'
import Header from '../Components/Header'

export default function PagesRoutes() {
  return (
    <div className='bg-slate-200'>
      <Router>
        <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  )
}
