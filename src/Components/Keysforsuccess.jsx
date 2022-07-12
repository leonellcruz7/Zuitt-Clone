import React from 'react'
import './Keysforsuccess.css'
import key1 from '../img/key1.jpg'
import key2 from '../img/key2.jpg'
import key3 from '../img/key3.jpg'
import key4 from '../img/key4.jpg'

export default function Keysforsuccess() {
    return (
        <div className="keys">
            <div className="smCon">
                <div className="row">
                    <div className="col1">
                        <h2>Keys for Success</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col4">
                        <div className="card">
                            <h4>4+ Stars Reviews</h4>
                            <img src={key1} width='35%' />
                            <p>Zuitt has been receiving high reviews from those who completed our course</p>
                        </div>
                    </div>
                    <div className="col4">
                        <div className="card">
                            <h4>2,000 Students Trained</h4>
                            <img src={key2} width='35%' />
                            <p>Zuitt has trained 2,000+ students from USA, japan, Philippines, Senegal and others at 100+ batches for 300+ employers</p>
                        </div>
                    </div>
                    <div className="col4">
                        <div className="card">
                            <h4>100% Live Instruction</h4>
                            <img src={key3} width='35%' />
                            <p>Focusing on learners' experience, all the classes are live interactive instructions, with curriculum improved through 100+ batches over the years.</p>
                        </div>
                    </div>
                    <div className="col4">
                        <div className="card">
                            <h4>Most COmpetitive Price</h4>
                            <img src={key4} width='35%' />
                            <p>Among all the other bootcamps with 100% live instruction, Zuitt’s offer is the most affordable, enabled by Standardized curriculum, Globalization and Scale strategy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
