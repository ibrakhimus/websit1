import React from 'react'
import before from "../assets/jack_before.webp";
import after from "../assets/jack_after.webp";

export default function GetStarted() {
  return (
    <section id="get-started">
        <div className="row hero__row">
            <div className="get__startedd">
                <div className="text__container">
                    <h1 className="started__h1">
                        You're one step closer to real results.
                    </h1>
                    <p className="started__para">
                    Answer a few questions about yourself and we'll create your custom treatment plan.
                    </p>
                    <a href="/form" className="agree__button">
                I Agree
                </a>
                </div>
                <div className="testimonial__container">
                    <div className="testimonial__text">
                        <p>Before</p>
                        <p>After</p>
                    </div>
                    <div className="testimonial__images">
                        <img className='testimonial__img' src={before} alt="" />
                        <img className='testimonial__img' src={after} alt="" />
                    </div> 
                    <div className="testimonial__name">
                        <p className="name">Jack, 22, Gold Coast</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
