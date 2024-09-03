import '../assets/CSS/portfolio.css'
import Proj1 from '../assets/images/proj1.jpeg'
import Proj2 from '../assets/images/proj2.jpeg'
import Proj3 from '../assets/images/proj3.jpeg'
import Proj4 from '../assets/images/proj4.jpeg'
import Proj5 from '../assets/images/proj5.jpeg'

const Portfolio = () => {
  return (
    <div className="portfolio_wrapper">
        <div className="portfolio_page">
            <div className="portfolio_index">
                <div className="portfol_header">
                    <div className="port_header">
                        <h3>Portfolio</h3>
                        <div className="header_line"></div>
                    </div>

                    <div className="head_desc">
                        <span>As a FullStack developer, i strive to create web applications</span>
                    </div>
                </div>

                <div className="main_portworks">
                    <div className="portfolio">
                        <div className="port_padd">
                            <div className="port_main">
                                <div className="port_head_main">
                                    <h2>Featured web Projects 🎨</h2>
                                </div>

                                <div className="por_projects">
                                    <div className="projects_grid">
                                        <div className="projects">
                                            <div className="project_content">
                                                <div className="projecct_overview">
                                                    <a href="http://semester-project-six.vercel.app" target="_blank" rel="noopener noreferrer">
                                                        <div className="proj_img">
                                                            <img src={Proj2} alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="project_context">
                                                    <div className="frame_work">
                                                        <div className="fram_used">
                                                            <h2>Semeter project</h2>
                                                        </div>

                                                        <div className="fram_des">
                                                            <div className="proj_desc">
                                                                <span>Semester project, an src sports academy for a university, anyone can join by booking a section with the sports president</span>
                                                            </div>
                                                        </div>

                                                        <div className="proj_foot">
                                                            <div className="proj_view">
                                                                <a href="http://semester-project-six.vercel.app" target='_blank'>
                                                                    <div className="view">
                                                                        <i className="bi bi-box-arrow-up-right"></i>
                                                                    </div>
                                                                </a>
                                                                <a href="https://github.com/GordenArcher/Semeter-project" target='_blank'>
                                                                    <div className="icon_github">
                                                                        <i className="bi bi-github"></i>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="proj_lan_used">
                                                                <div className="lang_dot jj"></div>
                                                                <div className="lang_uss">
                                                                    <span>javaScript</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="projects">
                                            <div className="project_content">
                                                <div className="projecct_overview">
                                                    <a href="http://willod-multimedia.vercel.app" target="_blank" rel="noopener noreferrer">
                                                        <div className="proj_img">
                                                            <img src={Proj1} alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="project_context">
                                                    <div className="frame_work">
                                                        <div className="fram_used">
                                                            <h2>Willod Multimedia</h2>
                                                        </div>

                                                        <div className="fram_des">
                                                            <div className="proj_desc">
                                                                <span>Willod multimedia is a multimedia company that deals in Graphic design. They make logo&apos;s, flyer&apos;s, and many more. </span>
                                                            </div>
                                                        </div>

                                                        <div className="proj_foot">
                                                            <div className="proj_view">
                                                                <a href="http://willod-multimedia.vercel.app">
                                                                    <div className="view">
                                                                        <i className="bi bi-box-arrow-up-right"></i>
                                                                    </div>
                                                                </a>
                                                                <a href="https://github.com/GordenArcher/Willod-Multimedia">
                                                                    <div className="icon_github">
                                                                        <i className="bi bi-github"></i>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="proj_lan_used">
                                                                <div className="lang_dot jj"></div>
                                                                <div className="lang_uss">
                                                                    <span>javaScript</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="projects">
                                            <div className="project_content">
                                                <div className="projecct_overview">
                                                    <a href="https://assignment-2-swart-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                        <div className="proj_img">
                                                            <img src={Proj3} alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="project_context">
                                                    <div className="frame_work">
                                                        <div className="fram_used">
                                                            <h2>Assignment 2</h2>
                                                        </div>

                                                        <div className="fram_des">
                                                            <div className="proj_desc">
                                                                <span>This project was an assignment given to us when I was doing my course at Openlabs Ghana, this project helped me gain more understanding </span>
                                                            </div>
                                                        </div>

                                                        <div className="proj_foot">
                                                            <div className="proj_view">
                                                                <a href="https://assignment-2-swart-pi.vercel.app/">
                                                                    <div className="view">
                                                                        <i className="bi bi-box-arrow-up-right"></i>
                                                                    </div>
                                                                </a>
                                                                <a href="https://github.com/GordenArcher/ASSIGNMENT-2">
                                                                    <div className="icon_github">
                                                                        <i className="bi bi-github"></i>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="proj_lan_used">
                                                                <div className="lang_dot jj"></div>
                                                                <div className="lang_uss">
                                                                    <span>javaScript</span>
                                                                </div>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="projects">
                                            <div className="project_content">
                                                <div className="projecct_overview">
                                                    <a href="https://assignment-4-gold.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                        <div className="proj_img">
                                                            <img src={Proj4} alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="project_context">
                                                    <div className="frame_work">
                                                        <div className="fram_used">
                                                            <h2>Assignment 4</h2>
                                                        </div>

                                                        <div className="fram_des">
                                                            <div className="proj_desc">
                                                                <span>This project was the 4th assignment given to me when I was at Openlabs Ghana, this project also helped me gain understanding working with bootsrap </span>
                                                            </div>
                                                        </div>

                                                        <div className="proj_foot">
                                                            <div className="proj_view">
                                                                <a href="https://assignment-4-gold.vercel.app/">
                                                                    <div className="view">
                                                                        <i className="bi bi-box-arrow-up-right"></i>
                                                                    </div>
                                                                </a>
                                                                <a href="https://github.com/GordenArcher/ASSIGNMENT-4">
                                                                    <div className="icon_github">
                                                                        <i className="bi bi-github"></i>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="proj_lan_used">
                                                                <div className="lang_dot jj"></div>
                                                                <div className="lang_uss">
                                                                    <span>javaScript</span>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="projects">
                                            <div className="project_content">
                                                <div className="projecct_overview">
                                                    <a href="https://currency-exchange-beta-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                        <div className="proj_img">
                                                            <img src={Proj5} alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="project_context">
                                                    <div className="frame_work">
                                                        <div className="fram_used">
                                                            <h2>Currency Exchange</h2>
                                                        </div>

                                                        <div className="fram_des">
                                                            <div className="proj_desc">
                                                                <span>This project is also a semeter project in college, This project helped me learn more about API integration and how to use them and also how to use graphs in my future projects</span>
                                                            </div>
                                                        </div>

                                                        <div className="proj_foot">
                                                            <div className="proj_view">
                                                                <a href="https://currency-exchange-beta-three.vercel.app/">
                                                                    <div className="view">
                                                                        <i className="bi bi-box-arrow-up-right"></i>
                                                                    </div>
                                                                </a>
                                                                <a href="https://github.com/GordenArcher/Currency-Exchange">
                                                                    <div className="icon_github">
                                                                        <i className="bi bi-github"></i>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="proj_lan_used">
                                                                <div className="lang_dot jj"></div>
                                                                <div className="lang_uss">
                                                                    <span>javaScript</span>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="projects">
                                            <div className="project_content">
                                                <div className="projecct_overview">
                                                    <div className="proj_img">
                                                        <img src="" alt="project image" />
                                                    </div>
                                                </div>

                                                <div className="project_context">
                                                    <div className="frame_work">
                                                        <div className="fram_used">
                                                            <h2></h2>
                                                        </div>

                                                        <div className="fram_des">
                                                            <div className="proj_desc">
                                                                <span></span>
                                                            </div>
                                                        </div>

                                                        <div className="proj_foot">
                                                            <div className="proj_view">
                                                                <a href="">
                                                                    <div className="view">
                                                                        <i className="bi bi-box-arrow-up-right"></i>
                                                                    </div>
                                                                </a>
                                                                <a href="">
                                                                    <div className="icon_github">
                                                                        <i className="bi bi-github"></i>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="proj_lan_used">
                                                                <div className="lang_dot jj"></div>
                                                                <div className="lang_uss">
                                                                    <span>javaScript</span>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio