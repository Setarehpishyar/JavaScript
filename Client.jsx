import React, { useEffect, useState } from 'react'
import Testimonial from './Testimonial'

const Client = () => {
    const [testimonials , setTestimonials] =useState ([])

    const getTestimonials = async() => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data =  await res.json ()
        setTestimonials (data)
    }

    useEffect(() => {
        getTestimonials()
       }, [])

    return (
        <section id="client">
            <div className="container-client">
                <div className="headline-client">
                    <h2 id="client-title">Clients are <br />Loving Our App</h2>
                    <div className="client-column">
                    {
                        testimonials.map((testimonial) => (
                            <Testimonial key ={testimonial.id} item={testimonial} />
                        ))
                    }
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Client
