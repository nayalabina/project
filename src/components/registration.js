import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200 relative">
            <div className="logo absolute top-8 left-10">
                <img src="/assets/logo.png" alt="Logo E-Learning" className="w-36" />
            </div>

            <div className="container flex w-full h-full max-w-full shadow-lg">
                <div className="left-section w-1/2 bg-white flex justify-center items-center p-20">
                    <img src="/assets/exam.png" alt="E-Learning" className="w-full h-auto" />
                </div>

                <div className="right-section w-1/2 p-20 bg-white flex flex-col justify-center">
                    <h2 className="text-center text-2xl mb-8 text-shadow font-bold">Registrasi</h2>
                    <form id="registerForm" className="space-y-6">

                        <div className="input-group flex items-center border-b border-gray-300 pb-2">
                            <i className="fas fa-key text-gray-400 mr-3"></i> 
                            <input
                                type="text"
                                id="kodeujian"
                                placeholder="Kode Ujian"
                                required
                                className="w-full p-2 focus:outline-none text-gray-700"/>
                        </div>

                        <button type="submit" className="btn w-full bg-blue-500 text-white py-4 rounded hover:bg-blue-600">
                            Registrasi
                        </button>
                    </form>

                    <Link to="/loginadmin" className="admin-login block text-center mt-4 text-blue-500 hover:underline">
                        Login sebagai Admin
                    </Link>
                </div>
            </div>

            <div className="footer absolute bottom-2 w-full text-center text-gray-700 text-sm">
                CBTExam©2024
            </div>

        </div>
    );
};

export default Registration;