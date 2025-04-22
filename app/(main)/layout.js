import React from 'react'

const MainLayout = ({ children }) => {
    // Redirect to Onboarding if the user is not onboarded 
    return (
        <div className='container mt-24 mb-20'>{children}</div>
    )
}

export default MainLayout