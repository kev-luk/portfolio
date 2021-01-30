import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='w-100 not-found'>
            <h1>This page could not be found!</h1>
            <Link
                to="/"
                style={{ fontSize: "1.5rem" }}
            >
                Return home
            </Link>
        </div>
    )
}

export default NotFound
