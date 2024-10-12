import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/404'
import Portfolio from './pages/Portfolio'
import NavHeader from './layout/NavHeader'

function App() {

  return (
    <>
    <div className="portfolio">
      <div className="portfolio_app">
        <div className="head_nav">
          <NavHeader />
        </div>
        
        <div className="main_content">
          <div className="routes">
            <Router>
              <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/contact' element={ <Contact /> } />
                <Route path='/portfolio' element={ <Portfolio /> } />
                <Route path='*' element={ <NotFound /> } />
              </Routes>
            </Router>
          </div>
        </div>

        <div className="kick-start">
          <div className="talk">
            <div className="high">
              <h2>Are You Ready to kickstart your project with a touch of magic?</h2>
            </div>

            <div className="lilt">
              <span>Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work.</span>
            </div>

            <div className="letal">
              <button>
                <a href="/contact">
                Let&apos;s Talk</a>
              </button>
            </div>
          </div>
        </div>

        <div className="footer">
          <footer>
            <div className="left">
              <span> copyright &copy; 2024 <a href="#!">G-KANAD, </a> All Rights Reserved. </span>
            </div>

            <div className="right">
              <p>Developed by ❤️ Gorden Archer</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
