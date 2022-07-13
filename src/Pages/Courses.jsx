import React, { useEffect, useState } from 'react'
import CourseCard from '../Components/CourseCard'
import './Courses.css'
import duration from '../img/duration.jpg'
import courseimage from '../img/course.jpg'

export default function Courses() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://zuitt-clone-backend.herokuapp.com/courses/all', {
            method: 'GET'
        }).then(res => res.json()).then(data => {
            console.log(data)

            setCourses(data.map(course => {
                return (
                    <CourseCard key={course._id} courseProp={course} />
                );
            }))
        })
    }, [])
    return (
        <div className="courses">
            <div className="smCon">
                <div className="row">
                    <div className="col1">
                        <h2>Our Curriculum</h2>
                    </div>
                </div>
                <div className="row toppart">
                    <div className="col2 ">
                        <div className="content">
                            <p>Our curriculum has been improved through more than 100 batches to equip different types of students with the necessary web development skills to become a web developer in 2+ months</p>
                        </div>
                    </div>
                    <div className="col2 left">
                        <img className='duration' src={duration} width='60%' />
                    </div>
                </div>
                <div className="row">
                    <div className="col1">
                        <div className="divider"></div>
                    </div>
                </div>
                <div className="row coursecard">
                    <div className="col2 right">
                        <img src={courseimage} width='80%' />
                    </div>
                    <div className="col2 coursecard card-details">
                        {courses}
                    </div>
                </div>
            </div>
        </div>
    )
}
