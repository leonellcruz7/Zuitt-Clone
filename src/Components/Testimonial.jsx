import React from 'react'
import './Testimonial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import user from '../img/testimony.png'

export default function Testimonial() {
    return (
        <div className="testimonial">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="mini-row">
                            <h2>Hear Our Students</h2>

                        </div>
                        <div className="mini-row">
                            <FontAwesomeIcon className='fontawe' icon={faQuoteRight} />
                        </div>

                        <div className="mini-row">
                            <p><i>“I didn’t plan to shift my career to developers. Learning coding is a MUST for everyone.”</i></p>
                        </div>
                        <div className="mini-row">
                            <div className="usercol">
                                <img src={user} width='12%' />
                                <div className="text">
                                    <h5>Mariko T.</h5>
                                    <p>Zuitt Online - Course Completer (Batch 84)</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
