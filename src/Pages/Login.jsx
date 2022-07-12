import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import logo from '../img/zuittlogo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'

export default function Login() {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (email !== '' && pass !== '') {
            setActive(true)
        }
        else {
            setActive(false)
        }
    })

    function login(e) {
        e.preventDefault()

        fetch('https://zuitt-clone-backend.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        }).then(res => res.json()).then(data => {
            console.log(data.access)
            if (data.access == undefined) {
                alert('Login Failed')
            }
            else {
                localStorage.setItem('token', data.access)
                fetch('https://zuitt-clone-backend.herokuapp.com/users/details', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${data.access}`
                    }
                }).then(res => res.json()).then(data => {
                    console.log(data)
                    localStorage.setItem('name', data.firstName)
                    localStorage.setItem('email', data.email)
                    setUser({
                        name: localStorage.getItem('name'),
                        email: localStorage.getItem('email')
                    })

                    navigate('/')
                })
            }

        })

    }

    return (
        <div className="login">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="col2Con">
                            <img src={logo} className='logo' />
                            <h3 className='slogan'>Opportunity  for everyone, <br />everywhere</h3>
                            <p>Learn how to code in 2 months immersed into live interactive online interaction at the mose competitive price</p>
                            <button className='applyBtn' onClick={e => navigate('/courses')}>Apply now</button>

                        </div>
                    </div>
                    <div className="col3">
                        <div className="col2Con">
                            <div className="card">
                                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                                <input type="password" placeholder='Password' value={pass} onChange={e => setPass(e.target.value)} />
                                {active ? <button className='loginBtn' onClick={login}>Login</button> : <button className='loginBtnInactive' disabled>Login</button>}
                                <Link className='link' to='#'>Forgot password? </Link>
                                <div className="border"></div>
                                <button className='createAcct' onClick={e => navigate('/register')}>Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
