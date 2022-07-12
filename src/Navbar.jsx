import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from './img/zuittlogo.png'
import UserContext from './UserContext'

export default function Navbar() {
    const { user, setUser } = useContext(UserContext)





    return (
        <div className="navbar">
            <div className="mdCon">
                <div className="row">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navlist">
                        <h4><Link className='link' to='/'>Home</Link></h4>
                        <h4><Link className='link' to='/courses'>Courses</Link></h4>
                        {(user.name !== null) ?
                            <h4><Link className='link' to='/logout'>Logout</Link></h4>
                            :
                            <React.Fragment>
                                <h4><Link className='link' to='/login'>Login</Link></h4>
                                <h4><Link className='link' to='/register'>Register</Link></h4>
                            </React.Fragment>
                        }
                        {(user.name !== null) ? <h4 ><Link className='link' to='/my-package'>Welcome, {user.name}!</Link></h4 > : <h4 hidden></h4>}
                    </div>
                </div>
            </div>
        </div>
    )
}