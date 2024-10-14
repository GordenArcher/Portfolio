import '../assets/CSS/contact.css'
const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="wrapper">
          <div className="dev-cont">
            <div className="touch">
              <div className="tit">
                <p>Contact</p>
              </div>

              <div className="big-touch">
                <h2>Get in Touch with Me!</h2>
              </div>
            </div>

            <div className="main-form-dev">
              <div className="cont">
                <div className="left-cont">
                  <div className="loc ba">
                    <div className="ba-icon">
                      <i className="bi bi-geo-alt"></i>
                    </div>

                    <div className="shea">
                      <h4>Location</h4>
                    </div>

                    <div className="data">
                      <p>Accra, Ghana</p>
                    </div>
                  </div>

                  <div className="loc ba">
                    <div className="ba-icon">
                      <i className="bi bi-phone"></i>
                    </div>

                    <div className="shea">
                      <h4>Contact Number</h4>
                    </div>

                    <div className="data">
                      <p><a href="tel:+233208729505">+233 208729505</a></p>
                    </div>
                  </div>

                  <div className="loc ba">
                    <div className="ba-icon">
                      <i className="bi bi-envelope"></i>
                    </div>

                    <div className="shea">
                      <h4>Email Address</h4>
                    </div>

                    <div className="data">
                      <p><a href="mailto:archergorden@gmail.com">archergorden@gmail.com</a></p>
                    </div>
                  </div>
                </div>

                <div className="right-cont">
                  <main-form>
                    <form>
                      <div className="f">
                        <div className="name-email">
                          <div className="name v">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                          </div>

                          <div className="email v">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                          </div>
                        </div>

                        <div className="message">
                          <label htmlFor="message">Your Message</label>
                          <textarea name="message" id="message" cols="10" rows="10"></textarea>
                        </div>

                        <div className="send">
                          <button>
                            <span>Send Message</span>
                            <i className="bi bi-envelope"></i>
                          </button>
                          
                        </div>
                      </div>
                    </form>
                  </main-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact