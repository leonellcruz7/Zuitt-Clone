import React from 'react'
import Features from '../Components/Features'
import Keysforsuccess from '../Components/Keysforsuccess'
import Landing from '../Components/Landing'
import Testimonial from '../Components/Testimonial'
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <Landing />
            <Features />
            <Keysforsuccess />
            <Testimonial />

        </div>
    )
}
