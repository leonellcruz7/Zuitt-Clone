import React from 'react'
import './Landing.css'
import landing from '../img/landing-img.png'
import { useNavigate } from 'react-router-dom'

export default function Landing() {

    const navigate = useNavigate()
    return (
        <div className="landing">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="col2Con">
                            <h2>
                                Coding BootCamp <br />Made Affordable at $1200
                            </h2>
                            <p>
                                Learn how to code in 2 months immersed into live interactive online interaction at the mose competitive price
                            </p>
                            <button onClick={e => navigate('/courses')}>Enroll Now</button>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="col2Con">
                            <img src={landing} width='100%' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
