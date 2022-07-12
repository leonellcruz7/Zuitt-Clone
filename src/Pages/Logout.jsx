import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../UserContext'

export default function Logout() {
    const { user, setUser } = useContext(UserContext)
    localStorage.clear()
    useEffect(() => {
        setUser({
            name: null,
            email: null
        })
    })

    return (
        <Navigate to='/login' />
    )
}
