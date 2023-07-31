import React, { useEffect, useState } from 'react';
import{Link } from 'react-router-dom';
import{FaBars, FaTimes, FaLeaf} from 'react-icons/fa';
import { Button } from './Buttton';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {

  // Because click is not defined we add state
  // The useState is set to false so the bars will be showcasing 
  const[click, setClick] = useState(false);
  const[button, setButton]= useState(true);
  // This function is the make the click function work
  const handleClick = () => setClick(!click)
  // Closes the navbar menu without clicking the times sign that can be called in any function
  const closeMobileMenu = () => setClick(false)

  // Shows button dependimg on the screen size you are on 
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    } else{
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  } , [])

  window.addEventListener('resize', showButton)

  return (
    <>
    {/* For the change in color of the icons from react icon*/}
    <IconContext.Provider value={{color: 'white'}}>
     <div className="navbar">
      <div className="navbar-container container">
        {/* The closeMobileMenu called here will close the menu when tthis fuction is active */}
        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
          <FaLeaf className='navbar-icon'/>
          GROW 
        </Link>
        <div className="menu-icon" onClick={handleClick}>
        {/* If i click and it is true display the times icon else display the bars  */}
          {click ? <FaTimes/> : <FaBars/>}
        </div>
        {/* click ? (if click is true) : (or else) */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-items">
            <Link to='/' className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to='/services' className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-items">
            <Link to='/products' className="nav-links">
              Products
            </Link>
          </li>
          <li to='/sign-up'className="nav-btn">
            {button ? (
              <Link className="btn-link">
                <Button buttonStyle='btn--outline'>SIGN UP</Button>
              </Link>
            ): (
              <Link to='/sign-up' className="btn-link">
                <Button buttonStyle='btn--outine' butttonSize='btn--mobile'>SIGN UP</Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
     </div>
     </IconContext.Provider>
    </>
  )
}

export default Navbar