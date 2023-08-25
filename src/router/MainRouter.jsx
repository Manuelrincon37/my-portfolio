import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Index } from '../components'
import { Contact } from '../components/Contact'
import { Resume } from '../components/Resume'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const MainRouter = () => {
  return (
    <BrowserRouter>

    {/* Navogation % Header */}
    <HeaderNav/>
    {/* Central content */}
    <section className='content'>
      <Routes>
          <Route path='/' element={<Navigate to={'/index'}/>}/>
          <Route path='/index' element={<Index/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={
              <div className='page'>
                <h1 className='heading'>Error 404</h1>
              </div>}/>
      </Routes>

    </section>
    {/* Footer */}
    <Footer/>
    </BrowserRouter>
  )
}
