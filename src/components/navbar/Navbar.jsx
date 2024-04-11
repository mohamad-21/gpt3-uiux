import './navbar.css';
import logo from '../../assets/logo.svg';
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

const Menu = ({hash}) => (
  <>
    <li><a href="#home" className={`${hash === '#home' ? 'active' : ''}`}>Home</a></li>
    <li><a href="#whatgpt3" className={`${hash === '#whatgpt3' ? 'active' : ''}`}>What is GPT3</a></li>
    <li><a href="#possibility" className={`${hash === '#possibility' ? 'active' : ''}`}>OpenAI</a></li>
    <li><a href="#features" className={`${hash === '#features' ? 'active' : ''}`}>Case Studies</a></li>
    <li><a href="#blog" className={`${hash === '#blog' ? 'active' : ''}`}>Library</a></li>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const { hash } = useLocation();
  console.log(hash);

  return (
    <div className="navbar">
      <div className="logo-links">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <Menu hash={hash} />
        </ul>
      </div>
      <div className="nav-sign">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
      <div className="nav-menu">
        {toggleMenu ? 
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          :
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="nav-menu-container scale-up-center">
            <div className="nav-menu-links">
              <Menu hash={hash} />
              <div className="nav-menu-links-sign">
                <button>Sign in</button>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar