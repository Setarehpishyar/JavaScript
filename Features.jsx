import React from 'react'

const Features = () => {
  return (

<section id="features1">
    <div className="app-features-content">
        <div className="mockup">
            <img className= "features-img" src="images/Features.svg" alt="Mobile Mockup"/>
        </div>
        <div className="features">
            <h2>App Features</h2>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Proin volutpat mollis egestas.<br />Nam luctus facilisis ultrices.Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            <div className="features-grid">
                <div className="feature-item">
                    <img src="images/easy.svg" alt="Easy Payments Icon"/>
                    <div className="feature-text">
                    <h3>Easy Payments</h3>
                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                </div>
                </div>
                <div className="feature-item">
                    <img src="images/data.svg" alt="Data Security Icon"/>
                    <div className="feature-text">
                    <h3>Data Security</h3>
                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                </div>
                </div>
                <div className="feature-item">
                    <img src="images/cost.svg" alt="Cost Statistics Icon"/>
                    <div className="feature-text">
                    <h3>Cost Statistics</h3>
                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                </div>
                </div>
                <div className="feature-item">
                    <img src="images/support.svg" alt="Support 24/7 Icon"/>
                    <div className="feature-text">
                    <h3>Support 24/7</h3>
                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>
                </div>
                <div className="feature-item">
                    <img src="images/regular.svg" alt="Regular Cashback Icon"/>
                    <div className="feature-text">
                    <h3>Regular Cashback</h3>
                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                </div>
                </div>
                <div className="feature-item">
                    <img src="images/top.svg" alt="Top Standards Icon"/>
                    <div className="feature-text">
                    <h3>Top Standards</h3>
                    <p>Facilisis dolor arcu, vestibulum cursus arcu elementum imperdiet eleifend.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
</section>
  )
}

export default Features


