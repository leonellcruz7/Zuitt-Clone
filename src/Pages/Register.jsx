import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    const [active, setActive] = useState(false)
    const [mobileStat, setMobileStat] = useState(false)
    const [emailStat, setEmailStat] = useState(false)

    useEffect(() => {
        if (first !== '' && last !== '' && mobile !== '' && mobile.length >= 11 && email !== '' && pass !== '' && pass2 !== '' && pass == pass2 && !emailStat) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    })

    useEffect(() => {
        if (mobile.length >= 11) {
            setMobileStat(true)
        }
        else {
            setMobileStat(false)
        }
    })

    useEffect(() => {
        fetch('https://zuitt-clone-backend.herokuapp.com/users/checkEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data == false) {
                setEmailStat(false)
            }
            else {
                setEmailStat(true)
            }
        })
    })



    function register(e) {
        e.preventDefault()
        fetch('https://zuitt-clone-backend.herokuapp.com/users/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: first,
                lastName: last,
                mobileNumber: mobile,
                email: email,
                password: pass
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            alert('Registration Successful')
            navigate('/login')
        })
    }

    return (
        <div className="register">
            <div className="smCon">
                <div className="row">
                    <div className="col1">
                        <h2 className='title'>Registration Form</h2>

                    </div>
                    <div className="col1">
                        <p><Link className='link' to='/login'>Already Registered?</Link></p>
                    </div>
                    <div className="col1">
                        <div className="col1Con">
                            <input type="text" placeholder='First Name *' value={first} onChange={e => setFirst(e.target.value)} />
                            <input type="text" placeholder='Last Name *' value={last} onChange={e => setLast(e.target.value)} />

                            <input type="text" placeholder='Mobile Number *' value={mobile} onChange={e => setMobile(e.target.value)} />
                            {mobileStat ? <p className='note' hidden>Minimum of 11 characters</p> : <p className='note' >Minimum of 11 characters</p>}

                            <input type="email" placeholder='Email *' value={email} onChange={e => setEmail(e.target.value)} />
                            {emailStat ? <p className='note' >Email already taken</p> : <p className='note' hidden>Email already taken</p>}
                            <input type="password" placeholder='Password *' value={pass} onChange={e => setPass(e.target.value)} />
                            <input type="password" placeholder='Confirm Password' value={pass2} onChange={e => setPass2(e.target.value)} />
                        </div>
                    </div>
                    <div className="col1 check">
                        <div className="col1Con2">
                            <h6 className='box-title'>Educational Attainment *</h6>
                            <div className="radio">
                                <input type="radio" name="educ" id='jr' />
                                <label for='jr'>Junior High School Graduate</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="educ" id='sr' />
                                <label for='sr'>Senior High School Graduate</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="educ" id='less' />
                                <label for='less'>Less than 2   years in college</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="educ" id='finish' />
                                <label for='finish'>Finished  atleast 2 years in college</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="educ" id='assoc' />
                                <label for='assoc'>Associate Degree or 2-year Certificate  Degree</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="educ" id='college' />
                                <label for='college'>College Graduate (4 or 5 year course)</label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="educ" id='others' />
                                <label for='others'>Others</label>
                            </div>
                            <h6 className='box-title'>Reason for Learning *</h6>
                            <div className="radio">
                                <input type="radio" name="Reason" id='want' />
                                <label for='want'>
                                    <p><strong>I want to be a software engineer</strong></p>
                                    <p><i>Gain necessary programming skills top land a job in Tech or advance my career in Software Development.</i></p>
                                </label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="Reason" id='add' />
                                <label for='add'>
                                    <p><strong>I want to learn additional skills</strong></p>
                                    <p><i>Learning how to code will help me elevate my career. My target is to pick up a new expertise to add up to my current skillset.</i></p>
                                </label>
                            </div>
                            <div className="radio">
                                <input type="radio" name="Reason" id='help' />
                                <label for='help'>
                                    <p><strong>I am not sure, please help me decide</strong></p>
                                    <p><i>I am interested to know how coding literacy can help me. I want to challenge myself in learning how to code so i can utilize it in a wide-range of possibilities.</i></p>
                                </label>
                            </div>
                            <div className="terms">
                                <p>If you have reviewed your answers above, please check the box below and click “Submit” to proceed to the next stage of your application.</p>

                                <div className="radio">
                                    <input type="checkbox" name="agree" id='agree' />
                                    <label for='agree'><p> By submitting this form, I acknowledge that i have read, understand and agree to Zuitt Coding Bootcamp's <Link className='link' to='/'>Privacy Policy and Terms of Service</Link></p></label>
                                </div>
                            </div>
                            <div className="col1">
                                <div className="col1Con">
                                    {active ? <button onClick={register}>Submit</button> : <button className='inactive' disabled>Submit</button>}
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
