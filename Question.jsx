
import React from 'react'

const Question = () => {
  return (
    <section id="question">
            <div className="container-question">
                <div className="left-column">
                <div className="headline-question">
                    <h2 id="question-title">Any questions? <br />Check out the FAQs</h2>
                    <p> Still have unanswered questions and need to get in touch?</p>
                </div>

                <div className="contact-row">
                <div className="contact-column">
                    <p className="column-contact" ><img className="contact1" src="images/icon (1).svg" alt=""/><br />Still have  questions?<br /><img className="contact-us" src="images/btn (1).svg" alt=""/></p>
                </div>
                <div className="contact-column1">
                    <p className="column-contact1" ><img className="contact2" src="images/icon (2).svg" alt=""/><br />Don't like phone calls?<br /><img className="contact-us1" src="images/btn (2).svg" alt=""/></p>
                </div>
                </div>
                </div>
        
            
            <div className="right-column">
                <div className="faq-item">
                    <span>Is any of my personal information stored in the App?</span>
                    <img src="images/arrow.svg" alt="Arrow Icon"/>
                </div>
                <div className="faq-item">
                    <span>What formats can I download my transaction history in?</span>
                    <img src="images/arrow.svg" alt="Arrow Icon"/>
                </div>
                <div className="faq-item">
                    <span>Can I schedule future transfers?</span>
                     
                    <img src="images/arrow.svg" alt="Arrow Icon"/>
                </div>
                <div className="faq-item">
                    <span>When can I use Banking App services?</span>
                    <img src="images/arrow.svg" alt="Arrow Icon"/>
                </div>
                <div className="faq-item">
                    <span>Can I create my own password that is easy for me to remember?</span>
                    <img src="images/arrow.svg" alt="Arrow Icon"/>
                </div>
                <div className="faq-item">
                    <span>What happens if I forget or lose my password?</span>
                    <img src="images/arrow.svg" alt="Arrow Icon"/>
                </div>
                <div className="btn-contact">
                    <img className="btn-contact1" src="images/Contact Us.svg" alt=""/>
                </div></div>
            </div>
        
    </section>
   
  )
}

export default Question


