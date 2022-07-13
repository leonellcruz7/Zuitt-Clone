import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from './img/zuittlogo.png'
import UserContext from './UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
    const { user, setUser } = useContext(UserContext)
    const [toggler, setToggler] = useState(false)

    function toggle(e) {
        e.preventDefault()

        setToggler(!toggler)
    }





    return (
        <div className="navbar">
            <div className="mdCon">
                <div className="row">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    {toggler ?
                        <div className="navlist mobile">
                            <h4><Link className='link' to='/' onClick={e => setToggler(false)}>Home</Link></h4>
                            <h4><Link className='link' to='/courses' onClick={e => setToggler(false)}>Courses</Link></h4>
                            {(user.name !== null) ?
                                <h4><Link className='link' to='/logout' onClick={e => setToggler(false)}>Logout</Link></h4>
                                :
                                <React.Fragment>
                                    <h4><Link className='link' to='/login' onClick={e => setToggler(false)}>Login</Link></h4>
                                    <h4><Link className='link' to='/register' onClick={e => setToggler(false)}>Register</Link></h4>
                                </React.Fragment>
                            }
                            {(user.name !== null) ? <h4 ><Link className='link' to='/my-package' onClick={e => setToggler(false)}>Welcome, {user.name}!</Link></h4 > : <h4 hidden></h4>}

                        </div>
                        :
                        <div className="navlist desktop" hidden>
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
                    }

                    <FontAwesomeIcon className='toggler' icon="fa-solid fa-bars" onClick={toggle} />
                </div>
            </div>
        </div>
    )
}
