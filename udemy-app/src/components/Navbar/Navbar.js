import React, { useState } from 'react'
import './Navbar.css';
import logo1 from "../../assets/logo-udemy.png" ;
import searchIcon from "../../assets/search-icon.png";
import { useNavigate } from 'react-router';

function Navbar() {
  const navigate = useNavigate();
    const [isHovering, setIsHovering] = useState("");
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };

  return (
<div className="navigation-bar">
  <li className="triple-line"><i className="fa-solid fa-bars" /></li>
  <li><img src={logo1} alt="udemy" /></li>
  <li className="Hide-navkeys Cate" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Categories
  {isHovering && (  <div className='categories-panel'>
    <li>Development</li>
    <li>Business</li>
    <li>Finance and Accounting</li>
    <li>It & Software</li>
    <li>Office Productivity</li>
    <li>Personal Development</li>
    <li>Lifestyle</li>
    <li>Marketing</li>
    <li>Design</li>
    <li>Health & Fitness</li>
    <li>Music</li>
    <li>Teaching & Academics</li>
  </div>)}
  </li>
  <li className="search Hide-navkeys"><input style={{backgroundImage: `url(${searchIcon})`}} type="text" placeholder="Search for anything" className="search-bar" name="search" /></li>
  <li className="Hide-navkeys">Udemy Business </li>
  <li className="Hide-navkeys">Teach on Udemy</li>
  <li className="icon-nav Hide-navkeys"><i className="fa-solid fa-cart-shopping" /></li>
  <li><div className="nav-buttons">
      <button className="Hide-navkeys" onClick={() => {
        navigate("/login")
      }}>Log in</button>
      <button className="Hide-navkeys1" style={{color: 'white', backgroundColor: 'black'}}>Sign Up</button>
      <button className="icon-nav" style={{paddingInline: '.4rem'}}><i className="fa-solid fa-globe" /></button>
    </div></li>
</div>

  )
}

export default Navbar