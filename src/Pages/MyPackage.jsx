import React, { useEffect, useState } from 'react'
import './MyPackage.css'

import beginner from '../img/begginer2.png'
import peer from '../img/peers.png'
import handson from '../img/handson2.png'
import PackageCard from '../Components/PackageCard'

export default function MyPackage() {
    const [packages, setPackages] = useState([])
    useEffect(() => {

        fetch('http://localhost:4000/users/getEnrolled', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            setPackages(data.map(item => {
                return (
                    <PackageCard key={item._id} itemProp={item} />
                )
            }))
        })
    }, [])


    return (
        <div className="mypackage">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="content">
                            <h2>Why Coding Bootcamp is Better than Self-studying</h2>
                            <p className='desc'>Online learning courses only have a 5% completion rate, meaning the vast majority of self-learners aren't able to learn coding by self-studying. You can do much better by signing up for our program, and here's why:</p>

                            <img src={beginner} alt="" />
                            <h4>Beginner-friendly</h4>
                            <p>Which programming languages should you learn? In what order? For what projects? Using what course? We've designed a single path for you with our beginner-friendly curriculum, so you can concentrate on actually learning instead of jumping from online course to online course.</p>

                            <img src={peer} alt="" />
                            <h4>Peers & Instructors</h4>
                            <p>When you're just starting to learn coding, you'll have a lot of questions. You'll learn faster if you have a coding expert there to give you instant answers. And you'll be able to stay more motivated if you're in a supportive environment surrounded by other aspiring developers.</p>

                            <img src={handson} alt="" />
                            <h4>Hands-on Learning</h4>
                            <p> You don't really know how to code until you can develop applications from scratch. Our students are required to build 3 web applications during their training. By the time they graduate, they're ready to show off their portfolio to employers and even get hired as Web Developers.</p>

                        </div>
                    </div>
                    <div className="col2">
                        <div className="content2">
                            <div className="row">
                                <div className="col1">
                                    <h2>Enrolled Packages</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="divider"></div>
                                {packages}
                                <div className="divider"></div>
                            </div>




                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
