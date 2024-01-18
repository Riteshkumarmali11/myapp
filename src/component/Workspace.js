import React from 'react'

const Workspace = () => {
    const customStyles = {
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (
        <div className="container mt-28 h-screen p-4 md:p-8 w-full max-w-screen-100 bg-ivory-50 shadow-md" style={customStyles}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                marginTop: ''
            }} className='mt-60 mb-60'>
                Cane Management System
            </div>
        </div>
    )
}

export default Workspace
