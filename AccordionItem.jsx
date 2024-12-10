import React, { useState } from 'react';

const AccordionItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="faq-item" onClick={toggleAccordion}>
                <span>{item.title}</span>
                <img 
                    src="images/arrow.svg" 
                    alt="Arrow Icon"
                    className={isOpen ? 'rotate' : ''}
                />
            </div>
          {
            isOpen && (
              <p className="item-content"  >
                {item.content}
            </p>
            )
          }
        </div>
    );
};

export default AccordionItem;

