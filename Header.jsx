import React from 'react'

const Header = () => {
  return (
    <header id="header">
    <div className="container">
        <a id="logo" href="index.html">
            <img src= "images/logo.svg" alt="Silicon logotype"/>
        </a>
        <nav id="main-menu" className="navbar">
            <a className="nav-link active" href="#">Features</a>
            <a className="nav-link active" href="#">contact</a>
        </nav> 
        <div className="right-controls">
            <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark mode</span>
                <label htmlFor="darkmode-switch" className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        <a id="auth-signin" href="#" className="btn-primary">
            <i className="fa-thin fa-user-large"></i>
            <span> Sign in / up</span>
        </a>
        <button className="btn-mobile">
            <i className="fa-regular fa-bars"></i>
        </button>
        </div>
        </div>
    </header>
  )
}

export default Header
