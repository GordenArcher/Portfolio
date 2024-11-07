import Dev from '../assets/images/img.png'
import '../assets/CSS/home.css'
import { useState, useEffect, useMemo } from 'react';
import DownloadResume from '../components/DownloadResume';

const Home = () => {

  const roles = useMemo(() => ["Software Developer", "Fullstack Engineer", "Frontend Developer", "Backend Developer"])
  const [index, setIndex] = useState(0); 
  const [subIndex, setSubIndex] = useState(0);  
  const [isDeleting, setIsDeleting] = useState(false);  
  const [speed, setSpeed] = useState(350); 

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && subIndex < roles[index].length) {
        setSubIndex(subIndex + 1);
      } else if (isDeleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
      } else if (!isDeleting && subIndex === roles[index].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }

      setSpeed(isDeleting ? 100 : 150);
    };

    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, speed, roles]);

  return (
    <div className="home_vv">
      <div className="home">
        <div className="see_dev">
          <div className="m-pme">
            <div className="dev__">
              <div className="dev_image">
                <img src={Dev} alt="developer image" />
              </div>
            </div>

            <div className="he_do">
              <div className="dev_name">
                <div className="name">
                  <h2>Gorden Panyin Archer</h2>
                </div>

                <h5>I am a Full-Stack developer based in Ghana,Accra.</h5>
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

          <div className="dev_wat">
            <div className="iam">
              <div className="smess">
                <p>Hello There!</p>
              </div>

              <div className="bout-me">
                <div className="waht_dev_do">
                  <div className="dev_do">
                    <span>I&apos;m a</span>
                    <p className="animated-role">
                      {roles[index].substring(0, subIndex)}
                    </p>
                  </div>

                  <span>
                  Full-Stack Developer here, skilled in React, Django, and database management. Experienced in building dynamic interfaces and robust backend systems, with a focus on scalable, maintainable solutions. Passionate about continuous learning and staying current with industry trends.
                  </span>
                </div>
              </div>

              <div style={{display:'flex', gap:'30px', flexDirection:'column', marginTop:'30px'}}>
                <div className="avai" style={{display:'flex', gap:'10px', alignItems:'center'}}>
                  <div className="dot"></div>
                  <div>Available for Freelancing</div>
                </div>

                <div className="down-cv">
                  <DownloadResume />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="resume_wrapper">
          <div className="resume_app">
            <div className="resume_container">
              <div className="resume_header">
                <div className="head_main">
                  <div className="resccc">
                    <h2>Resume</h2>
                    <div className="head_line"></div>
                  </div>
                </div>

                <div className="head_text">
                  <span>A little history about me</span>
                </div>
              </div>

              <div className="main_resume_cntainer">
                <div className="main_resume">
                  <div className="resume_grid">
                    <div className="resume_left">
                      <div className="left_wrapper">
                          <div className="summery">
                            <div className="zxcv">
                                <div className="sum_head">
                                    <h3>Summery</h3>
                                </div>
                            </div>

                            <div className="summm">
                              <div className="sum_line">
                                    <div className="lil_round"></div>
                                    <div className="line_sss"></div>
                              </div>

                              <div className="main_sum">
                                  <div className="msum_h">
                                      <h4>Gorden Archer</h4>
                                  </div>

                                  <div className="msum_b">
                                      <p>I&apos;m a passionate and dedicated Full-Stack Developer, based in Accra. I bring a strong blend of frontend and backend skills to the table. I strive to deliver high-quality work.</p>
                                  </div>

                                  <div className="msum_ldes">
                                    <ul>
                                      <li>Accra, Ghana</li>
                                      <li>(020) 872 9505</li>
                                      <li>archergorden@gmail.com</li>
                                    </ul>
                                  </div>
                              </div>
                            </div>

                            <div className="education_content">
                              <div className="edu_ccate">
                                <div className="edu_head">
                                    <h3>Education</h3>
                                </div>

                                <div className="education_main">
                                  <div className="edu_line">
                                    <div className="lil_round"></div>
                                    <div className="line_sss"></div>
                                  </div>

                                  <div className="edu_wrapp">
                                    <div className="edu_prog_name">
                                        <h3>Bachelor in Information Technology</h3>

                                        <div className="date_edu">
                                            2023 - Present
                                        </div>
                                    </div>

                                    <div className="edu_act_name">
                                        <div className="actt_namee">
                                            <p>Pentecost University College, Accra</p>
                                        </div>
                                    </div>

                                    <div className="lit_des">
                                        <p></p>
                                    </div>
                                  </div>
                                </div>

                                <div className="education_main">
                                    <div className="edu_line">
                                        <div className="lil_round"></div>
                                        <div className="line_sss"></div>
                                    </div>
                                    <div className="edu_wrapp">
                                      <div className="edu_prog_name">
                                          <h3>Fullstack web development</h3>

                                          <div className="date_edu">
                                              2024, Jan - 2024, September
                                          </div>
                                      </div>

                                      <div className="edu_act_name">
                                          <div className="actt_namee">
                                              <p>Openlabs Ghana, Accra</p>
                                          </div>
                                      </div>

                                      <div className="lit_des">
                                          <p>It was an intensive course that I took at Openlabs Ghana, It was practical based and I learnt alot to improve my skills</p>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className="resume_right">
                      <div className="resume_wrapp_right">
                        <div className="right_head">
                          <h3>Proffesional Experience</h3>
                        </div>

                        <div className="right_main">
                          <div className="rii_mm_wrapper">
                              <div className="education_main">
                                <div className="edu_line">
                                  <div className="lil_round"></div>
                                  <div className="line_sss"></div>
                                </div>

                                <div className="edu_wrapp">
                                  <div className="edu_prog_name">
                                      <h3>Network Engineer Intern</h3>

                                      <div className="date_edu">
                                        2023, March - 2023, May
                                      </div>
                                  </div>

                                  <div className="edu_act_name">
                                    <div className="actt_namee">
                                        <p>Ghana Rubber Estate Limited, Takoradi</p>
                                    </div>
                                  </div>

                                  <div className="lit_des">
                                      <p>This intern made me learn more about how networks operate andhow it works, I was assisted by one of the good network engineers who taught me alot of things like how to connect connect networks between multiple computers and more</p>
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

export default Home