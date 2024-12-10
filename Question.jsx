

import React, { useState, useEffect } from 'react';
import AccordionItem from './AccordionItem';

const Question = () => {
    const [accordions, setAccordions] = useState([]);

    const fetchQuestion = async () => {
        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
            const data = await res.json();
            setAccordions(data);
        } catch (error) {
            console.error('Error fetching FAQ data:', error);
        }
    };

    useEffect(() => {
        fetchQuestion();
    }, []);

    return (
        <section id="question">
            <div className="container-question">
                <div className="left-column">
                    <div className="headline-question">
                        <h2 id="question-title">Any questions? <br />Check out the FAQs</h2>
                        <p> Still have unanswered questions and need to get in touch?</p>
                    </div>
                </div>
                <div id="FAQ">
                    {accordions.map(item => (
                        <AccordionItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export defaul Question;
