import React, { useState } from 'react'
import '../assets/CSS/sidebar.css'

const NavHeader = () => {

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
                            <a href="/"> G-KANAD </a>
                        </div>
                    </div>

                    <div className="links">
                        <ul>
                            <li onMouseEnter={() => linkIcon(0)} onMouseLeave={() => linkIcon(0)}>
                                <a href="/">
                                    <div className="nav">
                                        <div className="nav_icon">
                                            <p><i className={`bi bi-house${iconFill[0] ? '-fill' : ''}`}></i></p>
                                        </div>
                                        <div className="nav_name">
                                            <div className="go_too"><span>Home</span></div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li onMouseEnter={() => linkIcon(1)} onMouseLeave={() => linkIcon(1)}>
                                <a href="/about">
                                    <div className="nav">
                                        <div className="nav_icon">
                                            <p><i className={`bi bi-person${iconFill[1] ? '-fill' : ''}`}></i></p>
                                        </div>
                                        <div className="nav_name">
                                            <div className="go_too"><span>About</span></div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li onMouseEnter={() => linkIcon(4)} onMouseLeave={() => linkIcon(4)}>
                                <a href="/services">
                                    <div className="nav">
                                        <div className="nav_icon">
                                            <p><i className={`bi bi-hdd-stack${iconFill[4] ? '-fill' : ''}`}></i></p>
                                        </div>
                                        <div className="nav_name">
                                            <div className="go_too"><span>Services</span></div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li onMouseEnter={() => linkIcon(3)} onMouseLeave={() => linkIcon(3)}>
                                <a href="/portfolio">
                                    <div className="nav">
                                        <div className="nav_icon">
                                            <p><i className={`bi bi-image${iconFill[3] ? '-fill' : ''}`}></i></p>
                                        </div>
                                        <div className="nav_name">
                                            <div className="go_too"><span>Portfolio</span></div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li onMouseEnter={() => linkIcon(5)} onMouseLeave={() => linkIcon(5)}>
                                <a href="/contact">
                                    <div className="nav">
                                        <div className="nav_icon">
                                            <p><i className={`bi bi-envelope${iconFill[5] ? '-fill' : ''}`}></i></p>
                                        </div>
                                        <div className="nav_name">
                                            <div className="go_too"><span>Contact</span></div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="hire-me">
                        <button>
                            <a href="/service">
                                Hire me
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavHeader