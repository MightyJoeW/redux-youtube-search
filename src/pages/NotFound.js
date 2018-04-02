import React from 'react'
import Link from 'react-router-dom';

const styles = {
    paddingTop: 64
}

const NotFound = () => {
    return (
        <div style={styles}>
            <h1>Page Not Found</h1>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default NotFound;