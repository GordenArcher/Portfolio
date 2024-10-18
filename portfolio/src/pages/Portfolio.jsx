import '../assets/CSS/portfolio.css'
import Proj1 from '../assets/images/proj1.jpeg'
import Proj2 from '../assets/images/proj2.jpeg'
import Proj3 from '../assets/images/proj3.jpeg'
import Proj4 from '../assets/images/proj4.jpeg'
import Proj5 from '../assets/images/proj5.jpeg'
import Proj6 from '../assets/images/proj6.jpeg'

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
                                    <h2>Featured Works & Projects 🎨</h2>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="projects">
                                            <div className="project_content">
                                                <div className="projecct_overview">
                                                    <div className="proj_img">
                                                        <a href="https://to-r21v082fd-gorden-archers-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                            <img src={Proj6} alt="project image" />
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="project_context">
                                                    <div className="frame_work">
                                                        <div className="fram_used">
                                                            <h2>Todo List</h2>
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