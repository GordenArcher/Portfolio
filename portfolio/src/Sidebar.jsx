
// import { useState } from 'react'
import { useState } from 'react'
import './assets/CSS/sidebar.css'
import Avatar from './assets/images/avatar.jpeg'
const Sidebar = () => {

  const [iconFill, setIconFill] = useState(Array(6).fill(false));

  const linkIcon = (index) => {
    const updatedIconFill = [...iconFill];
    updatedIconFill[index] = !updatedIconFill[index];
    setIconFill(updatedIconFill);
  };

  return (
    <div>
      <div className="sidebar">
        <nav>
          <div className="sidenav">
            <div className="side_nav">
              <div className="head">
                <div className="person">
                  <div className="person_tab">
                    <div className="image_socials">
                      <div className="main_person">
                        <div className="engineerrrr">
                          <img src={Avatar} alt="engineer image" />
                        </div>
                      </div>

                      <div className="person_socials">
                        <div className="socials">
                          <div className="social_links ">
                            <a href="https://x.com/khofi_offence">
                              <button className="icon x">
                                <span>
                                  <i className='bi bi-twitter-x'></i>
                                </span>

                                <div className="tooltip">
                                  <span>Twitter-X</span>
                                </div>
                              </button>
                            </a>
                            <a href="https://www.instagram.com/iam_offence_sk/">
                              <button className="icon in">
                                <span>
                                  <i className='bi bi-instagram'></i>
                                </span>

                                <div className="tooltip">
                                  <span>Instagram</span>
                                </div>
                              </button>
                            </a>
                            <a href="https://www.linkedin.com/in/gordenarcher/">
                              <button className="icon lin">
                                <span>
                                  <i className='bi bi-linkedin'></i>
                                </span>

                                <div className="tooltip">
                                  <span>Linkedin</span>
                                </div>
                              </button>
                            </a>
                            <a href="https://github.com/GordenArcher/">
                              <button className="icon git">
                                <span>
                                  <i className='bi bi-github'></i>
                                </span>

                                <div className="tooltip">
                                  <span>Github</span>
                                </div>
                              </button>
                            </a>
                            <a href="https://wa.me/0208729505">
                              <button className="icon wat">
                                <span>
                                  <i className='bi bi-whatsapp'></i>
                                </span>

                                <div className="tooltip">
                                  <span>WhatsApp</span>
                                </div>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="side_links">
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
                    <li onMouseEnter={() => linkIcon(2)} onMouseLeave={() => linkIcon(2)}>
                      <a href="/resume">
                        <div className="nav">
                          <div className="nav_icon">
                            <p><i className={`bi bi-file-earmark-richtext${iconFill[2] ? '-fill' : ''}`}></i></p>
                          </div>
                          <div className="nav_name">
                            <div className="go_too"><span>Resume</span></div>
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
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar