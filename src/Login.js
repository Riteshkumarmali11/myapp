import './static/Login.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState('');
    const navigate = useNavigate();

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
                setUser('exampleUser');
                const data = await response.json();
                console.log('Login successful:', data);
                console.log(setUser);

                // Store the token in a cookie
                document.cookie = `token=${data.token}; path=/`;
                // alert(document.cookie); //for alert token key
                toast.success('Login successful');
                alert(document.cookie);
                // Redirect or perform other actions on successful login
                navigate(`/navbar/${user}`)
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
                                <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter username"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <input type="password" name='password'
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your password"
                                    required
                                />
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Forgot your password?
                                </a>
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
