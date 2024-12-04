import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
                <div className="container-hero">
                      <div className="headline">
                        
                <h1 className="headline-1">Manage All Your <br />Money in One App</h1>
                      
                </div>
                <div className="hero-content">
                    <p>We offer you a new generation of the mobile banking.Save, spend & manage money in your pocket.</p>
                    
                    <div className="app-buttons">
                        <a className= "btn-download" href="#"><img className="img-appstor" src="images/Link (2).svg" alt="appstore"/></a>
                        <a className= "btn-download" href="#"><img className="img-google" src="images/Link (3).svg" alt="googleplay"/></a>
                    </div>
                <a href="#" className="discover-more">
                    <img className="img-discover" src="images/more.svg" alt="app"/>
                </a>
                </div>
            <div className="images">
                <img className="img-mobile" src="images/Group.svg" alt="mobile"/>
            </div>
            </div>
            </section>
  )
}

export default Hero
