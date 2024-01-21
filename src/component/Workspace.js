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
        <div className="container mt-28 h-screen p-4 md:p-8 w-full max-w-screen-100 bg-wheet-500 shadow-md" style={customStyles}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center",  height: "100%", fontSize:"30px" ,
         }} className='mt-60 mb-60'>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", fontSize: "30px" }}>
                <div>
                    <img src='/logo1.jpg' alt='Cane Management System Logo 1' style={{ height: '6rem', width: '8rem' }} />
                </div>
                <div>
                    <strong>Cane Management System </strong>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Workspace
