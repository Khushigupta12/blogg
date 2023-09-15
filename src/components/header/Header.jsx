import React from 'react'
import "./header.css"
import edublog2 from "../../assets/images/edublog2.webp";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";
import User from './User';
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  }); 
  const main = () => {
    window.location.replace("/");
  }
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <img src={edublog2} alt="logo" width="110px" onClick={main} />
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <User/>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header