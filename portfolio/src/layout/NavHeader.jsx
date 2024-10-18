import { useState } from 'react'
import '../assets/CSS/sidebar.css'
import { Link } from 'react-router-dom';

const NavHeader = ( ) => {

    const [iconFill, setIconFill] = useState(Array(6).fill(false));

    const linkIcon = (index) => {
      const updatedIconFill = [...iconFill];
      updatedIconFill[index] = !updatedIconFill[index];
      setIconFill(updatedIconFill);
    };

  return (
    <div>
        <div className="header-">
            <div className="page-head">
                <div className="head_links">
                    <div className="logo">
                        <div className="jlog">
                            <Link to='/'>G-KANAD</Link>
                        </div>
                    </div>

                    <div className="links">
                        <ul>
                            <li onMouseEnter={() => linkIcon(0)} onMouseLeave={() => linkIcon(0)}>
                                <Link to='/'>
                                    <div className="nav">
                                        <div className="nav_icon">
                                            <p><i className={`bi bi-house${iconFill[0] ? '-fill' : ''}`}></i></p>
                                        </div>
                                        <div className="nav_name">
                                            <div className="go_too"><span>Home</span></div>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li onMouseEnter={() => linkIcon(1)} onMouseLeave={() => linkIcon(1)}>
                                <Link to='/about'>
                                    <div className="nav">
                                        <div className="nav_icon">
                                            <p><i className={`bi bi-person${iconFill[1] ? '-fill' : ''}`}></i></p>
                                        </div>
                                        <div className="nav_name">
                                            <div className="go_too"><span>About</span></div>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li onMouseEnter={() => linkIcon(4)} onMouseLeave={() => linkIcon(4)}>
                                <Link to='/services'>
                                    <div className="nav">
                                        <div className="nav_icon">
                                            <p><i className={`bi bi-hdd-stack${iconFill[4] ? '-fill' : ''}`}></i></p>
                                        </div>
                                        <div className="nav_name">
                                            <div className="go_too"><span>Services</span></div>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li onMouseEnter={() => linkIcon(3)} onMouseLeave={() => linkIcon(3)}>
                                <Link to='/portfolio'>
                                    <div className="nav">
                                        <div className="nav_icon">
                                            <p><i className={`bi bi-image${iconFill[3] ? '-fill' : ''}`}></i></p>
                                        </div>
                                        <div className="nav_name">
                                            <div className="go_too"><span>Portfolio</span></div>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li onMouseEnter={() => linkIcon(5)} onMouseLeave={() => linkIcon(5)}>
                                <Link to='/contact'>
                                    <div className="nav">
                                        <div className="nav_icon">
                                            <p><i className={`bi bi-envelope${iconFill[5] ? '-fill' : ''}`}></i></p>
                                        </div>
                                        <div className="nav_name">
                                            <div className="go_too"><span>Contact</span></div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="hire-me">
                        <button>
                            <Link to='/service'>
                                Hire me
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavHeader