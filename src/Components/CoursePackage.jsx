import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseView from './CourseView'
import './CoursePackage.css'

export default function CoursePackage() {

    const [packages, setPackages] = useState([])
    const [title, setTitle] = useState([])
    const { courseId } = useParams()

    useEffect(() => {
        fetch('http://localhost:4000/packages/getPackage', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                courseId: courseId
            })
        }).then(res => res.json()).then(data => {
            console.log(data)

            setPackages(data.map(item => {
                return (
                    <CourseView key={item._id} packageProp={item} />
                )
            }))
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:4000/courses/getCourse', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: courseId
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            setTitle(data)
        })
    }, [])

    return (
        <div className='coursePackage'>
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="col2con">
                            <h1>{title.name}</h1>
                            <p>{title.description}</p>
                        </div>
                    </div>
                    <div className="col2">
                        {packages}
                    </div>

                </div>
            </div>
        </div>
    )
}
