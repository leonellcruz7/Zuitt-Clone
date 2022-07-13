import React from 'react'
import { useParams } from 'react-router-dom'
import './CourseView.css'

export default function CourseView({ packageProp }) {
    const courseId = useParams()
    function enroll(e) {
        e.preventDefault()

        fetch('https://zuitt-clone-backend.herokuapp.com/users/enroll', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                id: packageProp._id
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (localStorage.getItem('token') == null) {
                alert('Please login first')
            }
            else {
                alert(`success`)
            }
        })

    }

    return (

        <div className="col2 courseView">
            <div className="courseViewCard">
                <div className='courseContent'>
                    <h1>{packageProp.name}</h1>
                    <div className="divider"></div>
                    <p>{packageProp.description}</p>
                    <h5>Price: ${packageProp.price}.00</h5>
                </div>
                <div>
                    <button className='enrollBtn' onClick={enroll}>Enroll</button>
                </div>
            </div>
        </div>


    )
}
