import React from 'react'
import SideNav from '../components/SideNav/SideNav';

const styles = {
    paddingTop: 64
}

const Articles = () => {
    return (
        <div style={styles}>
            <SideNav />
            <h1>Articles</h1>
        </div>
    )
}

export default Articles;