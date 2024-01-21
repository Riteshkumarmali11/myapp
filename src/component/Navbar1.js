import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Workspace from './Workspace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import '../static/page.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const userEmail = localStorage.getItem('user');
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/');
    };


    const links = [
        {
            name: 'Manage Masters',
            submenu: [
                { name: 'Clusters', link: '/home' },
                { name: 'Village', link: '/demo' },
                { name: 'Farmer Registration', link: '/farmerregistration' },
                { name: 'Harvesting Order', link: '/harvesting-order' },
            ],
        },
        {
            name: 'Field Operations',
            submenu: [
                { name: 'Plantation', link: '/plantation' },
                { name: 'Plantation List', link: '/plantationlist' },
                { name: 'Order Generation', link: '/farmer-registration' },
                { name: 'Harvesting Order List', link: '/harvesterlist' },
                { name: 'Permission Slip', link: '/harvesting-order' },
                { name: 'Joint Order', link: '/harvesting-order' },
                { name: 'Token Queue List', link: '/harvesting-order' },
            ],
        },
        { name: 'Farmer Details', link: '/farmerlist' },
        { name: 'Reports', link: '/' },
        // { name: 'CONTACT', link: '/' },
        // { name: 'Logout', link: '/' },
        // { name: 'Language', link: '/' },
    ];

    return (
        <>
            <nav className='shadow-md w-full fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-gray-200 py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                            <FontAwesomeIcon icon={faIndustry} style={{ color: 'brown' }} />
                        </span>
                        Cane Management System
                    </div>

                    <div
                        onClick={() => setOpen(!open)}
                        className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
                    >
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    <ul
                        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'
                            }`}
                    >
                        {links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                {link.submenu ? (
                                    <div className='relative group'>
                                        <a
                                            href={link.link}
                                            className='text-gray-800 hover:text-gray-400 duration-500'
                                        >
                                            {link.name}
                                        </a>
                                        <ul className='absolute hidden mt-2 space-y-2 bg-gray-200 shadow-md group-hover:block w-[max-content]'>
                                            {link.submenu.map((item) => (
                                                <li key={item.name}>
                                                    <a
                                                        href={item.link}
                                                        className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                                                    >
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <a
                                        href={link.link}
                                        className='text-gray-800 hover:text-gray-400 duration-500'
                                    >
                                        {link.name}
                                    </a>
                                )}
                            </li>
                        ))}
                        {/* <button className="btn btn-warning ml-5 "> {userEmail ? (
                            <span>{userEmail}</span>
                        ) : null}</button> */}
                        <div className="dropdown">
                            <button
                                className="btn btn-warning ml-5"
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                            >
                                {userEmail ? (
                                    <span>{userEmail}</span>
                                ) : null}  
                                <span className="arrow-icon ">&#9660;</span> {/* Unicode character for down arrow */}
                            </button>
                            {isDropdownOpen && (
                                <div className="dropdown-content mt-2">
                                    {/* Additional dropdown content can be added here */}
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )}
                        </div>

                    </ul>
                </div>
            </nav>
             <Workspace/> 
        </>
    );
};

export default Navbar;
