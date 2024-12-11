import '../assets/CSS/portfolio.css'
import Proj1 from '../assets/images/rdr.jpeg'
import Proj2 from '../assets/images/proj2.jpeg'
import Proj3 from '../assets/images/over.jpeg'
// import Proj4 from '../assets/images/proj4.jpeg'
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
                                                        <div className="proj_img cs">
                                                            <img src={Proj1} alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="project_context">
                                                    <div className="frame_work">
                                                        <div className="fram_used">
                                                            <h2>Connectify</h2>
                                                            <p>Connectify is a social media platform where users can send friend requests, chat with friends in real-time, and engage with posts by liking and commenting. Built with Django and javascript, it offers a smooth and interactive experience with real-time notifications for messages, friend requests, and post interactions.</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="projects">
                                            <div className="project_content">
                                                <div className="projecct_overview">
                                                    <a href="https://recuerdo.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                        <div className="proj_img">
                                                            <img src={Proj3} alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="project_context">
                                                    <div className="frame_work">
                                                        <div className="fram_used">
                                                            <h2>Memory Application</h2>
                                                            <p>It&apos;s an application that allow users to upload their memory or media that are unique to them</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="projects">
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
                                        </div> */}
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
                                                            <p>This is also a currency exchange application that allow users to enter any amount to be exchanged in the selected currency</p>
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
                                                            <p>This is a Todo List, it allows users to enter their todo for the day or days to come so that they won&apos;t forget </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="projects">
                                            <div className="project_content">
                                                <div className="projecct_overview">
                                                    <a href="http://semester-project-six.vercel.app" target="_blank" rel="noopener noreferrer">
                                                        <div className="proj_img cs">
                                                            <img src={Proj2} alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="project_context">
                                                    <div className="frame_work">
                                                        <div className="fram_used">
                                                            <h2>Semeter Project</h2>
                                                            <p>This project was a semeter project in school, where the proffessor highlited that we create a sports academy website for the src board</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mwork'>
                            <div className="more">
                                <a href="https://github.com/GordenArcher">
                                    <button>View More</button>
                                </a>
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