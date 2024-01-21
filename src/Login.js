import './static/Login.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    //const local=useRef();

    const handleLogin = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                setUser('user-info');
                const data = await response.json();
                console.log('Login successful:', data);
                console.log("Success setuser", setUser);
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.user);
                // Store the token in a cookie
                document.cookie = `token=${data.token}; path=/`;
                // alert(document.cookie); //for alert token key
                toast.success('Login successful');
                alert(document.cookie);
                // Redirect or perform other actions on successful login
                navigate(`/navbar1/${user}`)
            } else {
                console.error('Login failed:', response.statusText);
                // Handle login error (show error message, etc.)
                toast.error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login.');
        } finally {
            setLoading(false); // Set loading to false regardless of success or failure
        }
    };

    return (
        <div>
            <div className="bg-cover bg-center bg-fixed bg-gray-200">
                <ToastContainer />
                {/* Loading indicator */}
                {loading && (
                    <div className="overlay">
                        <div className="spinner-container">
                            <div className="spinner"></div>
                        </div>
                    </div>
                )}
                <div className="h-screen flex justify-center items-center">
                    <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
                        <div >
                            <div className="mb-4">
                                <label
                                    className="block font-semibold text-gray-700 mb-2" >
                                    Username
                                </label>
                                <div className='input-icon'>
                                    <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)}
                                        className="back shadow-md rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter username"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-4 relative">
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="input-icon">
                                    <input
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="back shadow-md rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pl-10 pr-10"
                                        placeholder="Enter your password"
                                        required />
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEye : faEyeSlash}
                                        className="eye-icon mb-3"
                                        onClick={() => setShowPassword(!showPassword)} />
                                </div>
                                <div className='row'>
                                    <div className='column'>
                                        New Supervisor?
                                        <a href="/registration" className="text-blue-600 hover:text-blue-800">
                                            Click Here..!
                                        </a>
                                    </div>
                                    <div className='column text-align:right'>
                                        Forgot your &nbsp;
                                        <a href="#" className="text-blue-600 hover:text-red-800 right-0 pass ">
                                            Password..?
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <button type="submit" onClick={handleLogin}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
