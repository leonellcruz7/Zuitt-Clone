import React from 'react'
import './CourseCard.css'
import { useNavigate } from 'react-router-dom'

export default function CourseCard({ courseProp }) {
    const navigate = useNavigate()
    return (
        <div className="coursecard">
            <div className="details">
                <div className="title">
                    <h4>{courseProp.name}</h4>
                    <p><i>{courseProp.detail}</i></p>
                </div>
                <div className="description">
                    <p>{courseProp.description}</p>
                </div>
                <button onClick={e => navigate(`/courses/${courseProp._id}`)}>Learn More</button>
                <div className="divider"></div>

            </div>
        </div>
    )
}
