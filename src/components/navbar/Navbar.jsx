import './navbar.css';
import logo from '../../assets/logo.svg';
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Menu = () => (
  <>
    <li><a href="#home">Home</a></li>
    <li><a href="#whatgpt3">What is GPT3</a></li>
    <li><a href="#possiblity">OpenAI</a></li>
    <li><a href="#features">Case Studies</a></li>
    <li><a href="#blog">Library</a></li>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="logo-links">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <Menu />
        </ul>
      </div>
      <div className="nav-sign">
        <span>Sign in</span>
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
              <Menu />
              <div className="nav-menu-links-sign">
                <span>Sign in</span>
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