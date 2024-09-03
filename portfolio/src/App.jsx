import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './App.css'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Resume from './pages/Resume'
import NotFound from './pages/404'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    <>
    <div className="portfolio">
      <div className="portfolio_app">
        <div className="side_bar">
          <Sidebar />
        </div>
        
        <div className="main_content">
          <div className="routes">
          <Router>
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/about' element={ <About /> } />
              <Route path='/resume' element={ <Resume /> } />
              <Route path='/portfolio' element={ <Portfolio /> } />
              <Route path='/contact' element={ <Contact /> } />
              <Route path='*' element={ <NotFound /> } />
            </Routes>
          </Router>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
