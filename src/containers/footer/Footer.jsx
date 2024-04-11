import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="section-padding">
      
      <div className="heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        <button>
          Request Early Access
        </button>
      </div>

      <div className="logo-links">

        <div className="logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="links">

          <div className="item">
            <h4>Links</h4>
            <ul>
              <li><a href="#">Overons</a></li>
              <li><a href="#">Social Media</a></li>
              <li><a href="#">Counters</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="item">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="item">
            <h4>Get in touch</h4>
            <ul>
              <li><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></li>
              <li><a href="#">085-132567</a></li>
              <li><a href="#">info@payme.net</a></li>
            </ul>
          </div>

        </div>

      </div>

      <div className="copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer