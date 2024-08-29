import Dev from '../assets/images/img.png'
import '../assets/CSS/home.css'
import { useState, useEffect, useMemo } from 'react';

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

        <div className="dev__">
            <div className="dev_image">
              <img src={Dev} alt="developer image" />
            </div>
          </div>

          <div className="dev_wat">
            <div className="he_do">
              <div className="dev_name">
                <div className="name">
                  <h4>Gorden Panyin Archer</h4>
                </div>
              </div>

              <div className="waht_dev_do">
                <div className="dev_do">
                  <span>I&apos;m a</span>
                  <p className="animated-role">
                    {roles[index].substring(0, subIndex)}
                  </p>
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