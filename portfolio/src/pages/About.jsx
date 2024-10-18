import { useState, useEffect, useMemo } from 'react'
import '../assets/CSS/about.css'
import DevImg from '../assets/images/img.png'
import { Link } from 'react-router-dom'
import { Experience } from '../layout/Experience'

const About = () => {

  const Languages = [
    "UI/UX Design",
    "Responsive Design",
    "JavaScript",
    "React",
    "Django",
    "Postgres",
    "MongoDB",
    "Team Collaboration and Fast Learner"
    // {
    //   a : "UI/UX Design"
    // },
    // {
    //   b : "React"
    // },
    // {
    //   c : "Django"
    // },
    // {
    //   d : "Postgres"
    // },
    // {
    //   e : "MongoDB"
    // }
  ]

  const roles = useMemo(() => ["Software Developer.", "Fullstack Engineer.", "Frontend Developer.", "Backend Developer."])
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
    <div>
      <div className="about-section">
        <div className="about-wrapper">
        <div className="home">
          <div className="see_dev">
            <div className="m-pme">
              <div className="dev__">
                <div className="dev_image">
                  <img src={DevImg} alt="developer image" />
                </div>
              </div>
            </div>

            <div className="dev_wat">
              <div className="iam">
                <div className="bout-me">
                  <div className="waht_dev_do">
                    <div className="about_do">
                      <span>I&apos;m a</span>
                      <span>Gorden Archer</span>
                      <span className="animated-role">
                        {roles[index].substring(0, subIndex)}
                      </span>
                    </div>

                    <div style={{display : 'flex', flexDirection :'column', gap : '10px', fontSize: '1.2rem'}}>
                      <div className="labot">
                        <span>
                          I am an Accra-based fullstack engineer with a focus on web development, software engineering, and user interface design. My expertise spans a diverse range of technologies, and I&apos;ve worked across various industries to deliver both frontend and backend solutions.
                        </span>
                      </div>

                      <div className='last-abb'>
                        <span>
                        Unlike many might think, coding is more than just logic and syntax—it’s an art. The world of programming, like the ancient world of classical literature, has deep roots in history. Over the years, it has evolved into the backbone of modern innovation. My journey as a developer involves continuous learning and a commitment to improving the digital landscape for users worldwide.
                        </span>
                      </div>
                    </div>

                    <div className="get-in">
                      <button>
                        <Link to='/contact'>
                          <p>Get In Touch</p>
                          <i className='bi bi-envelope'></i>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-tab">
          <div className="ex-tab">
            <div className="ex-head">
              <h2>Technologies I&apos;m Familiar with</h2>
            </div>
            <div className="exp">
              {Languages.map((lang, index) => {
                return <Experience key={index} lang={lang} />
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;