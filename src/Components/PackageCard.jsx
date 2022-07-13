import React from 'react'
import './PackageCard.css'

export default function PackageCard({ itemProp }) {
    return (
        <div className="col3 slip">
            <div className="packCard">
                <div className='card'>
                    <div><h4>{itemProp.name}</h4></div>
                    <div>${itemProp.price}.00</div>
                </div>
                <div className='btn'>
                    <button>Unenroll</button>
                </div>
            </div>

        </div>
    )
}
