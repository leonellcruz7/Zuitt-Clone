import React from 'react'
import './Features.css'
import cafe24 from '../img/cafe24.png'
import cloudwalk from '../img/cloudwalk.png'
import xurpas from '../img/xurpas.png'
import forbesjp from '../img/forbesjp.png'
import geechs from '../img/geechs.png'
import career from '../img/career.png'

export default function Features() {
    return (
        <div className="features">
            <div className="smCon">
                <div className="row">

                    <div className="feature-col-wide">
                        <h2 className='num'> </h2>
                        <h2><span> 300+</span> Employers Hired Our Bootcampers</h2>
                    </div>


                    <div className="feature-col">
                        <img src={cafe24} width='100%' />
                    </div>
                    <div className="feature-col">
                        <img src={cloudwalk} width='70%' />
                    </div>
                    <div className="feature-col">
                        <img src={xurpas} width='100%' />
                    </div>

                </div>
                <div className="row">
                    <div className="border"></div>
                </div>
                <div className="row">
                    <div className="feature-col-wide">
                        <h2>Featured by <span> 10+ </span>Media</h2>

                    </div>
                    <div className="feature-col">
                        <img src={forbesjp} width='60%' />
                    </div>
                    <div className="feature-col">
                        <img src={geechs} width='60%' />
                    </div>
                    <div className="feature-col">
                        <img src={career} width='60%' />
                    </div>
                </div>
            </div>
        </div>
    )
}
