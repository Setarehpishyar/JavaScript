import React from 'react'

const Money = () => {
  return (
    <section id="money">
            <div className="container-money">
                  <div className="headline-money">
                    <h2 id="section-left-title">Make your money <br />transfer simple and clear</h2>
                    <div className="icon-text-pair">
                    <img className="icon" src="images/bx-check-circle.svg" alt=""/>
                        <p>Banking transactions are free for you</p>
                    </div>
                        <div className="icon-text-pair">
                        <img className="icon" src="images/bx-check-circle.svg" alt=""/>
                        <p>No monthly cash commission</p>
                    </div>
                        <div className="icon-text-pair">
                        <img className="icon" src="images/bx-check-circle.svg" alt=""/>
                        <p>Manage payments and transactions online</p>
                    </div>
                    <a href="#" className="learn-more">
                        <img className="learnmore1" src="images/learnmore.svg" alt="Learn More1"/>
                    </a>
                    <div className="contacts">
                        <img className="card-image" src="images/money2.svg" alt="Card" />
                    </div>
                </div>
                <div className="section-right">
                    <img className="contacts-image" src="images/money1.svg" alt="Contacts" />
                    <h2 id="section-right-title">Receive payment from <br />international bank details</h2>
                    <div className="chart">
                        <img className="easy" src="images/easy.svg" alt="chart image"/>
                        <img className="regular" src="images/regular.svg" alt="chart image2"/>
                    </div>
                    <div className="column-container">
                    <p>Manage your payments online.<br /> Mollis congue egestas egestas <br /> fames.</p>
                    <p>A elementum at imperdiet enim <br />pretium etiam facilisi aenean<br /> quam mauris.</p>
                    </div>
                    <a href="#" className="learn-more2">
                        <img className="learnmore2" src="images/learnmore.svg" alt="Learn More2"/>
                    </a>
                </div>
            </div>
        </section>
  )
}

export default Money
