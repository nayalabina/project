import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Soal = () => {
    const [isNotificationVisible, setNotificationVisible] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);
    const [selectedExam, setSelectedExam] = useState('');
    const [hasCompletedExam1, setHasCompletedExam1] = useState(false); 

    const toggleSidebar = () => {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("w-14");
        sidebar.classList.toggle("w-56");

        const navTexts = sidebar.querySelectorAll('.nav-text');
        navTexts.forEach(text => {
            text.classList.toggle('hidden');
        });
    };

    const handleExamClick = (ujianName) => {
        if (ujianName === "Ujian 1") {
            setConfirmationVisible(true);
            setSelectedExam(ujianName);
        } else {
            if (!hasCompletedExam1) {
                showNotification("Anda belum mengerjakan Ujian 1");
            } else {
                setConfirmationVisible(true);
                setSelectedExam(ujianName);
            }
        }
    };

    const showNotification = (message) => {
        setNotificationMessage(message);
        setNotificationVisible(true);
    };

    const handleConfirm = () => {
        alert("Anda memulai " + selectedExam);
        setConfirmationVisible(false);
        // logika untuk memulai ujian 
        if (selectedExam === "Ujian 1") {
            setHasCompletedExam1(true);
        }
    };

    const closeNotification = () => {
        setNotificationVisible(false);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="sidebar bg-blue-500 flex flex-col items-center justify-between py-5 px-0 fixed left-10 top-1/2 transform -translate-y-1/2 h-[95%] w-14 rounded-lg transition-all duration-300" id="sidebar">
                <button className="toggle-btn mb-5" onClick={toggleSidebar}>
                    <i className="fas fa-bars text-white text-2xl"></i>
                </button>
                <Link to="/soal" className="nav-item flex items-center justify-start w-full py-2 px-4 mb-5 text-white transition-colors duration-300" onClick={() => {
                    setConfirmationVisible(false); 
                }}>
                    <i className="fas fa-file-alt text-2xl mr-2"></i>
                    <span className="nav-text hidden text-base">Soal Ujian</span>
                </Link>
                <Link to="/registration" className="nav-item logout mt-auto flex items-center justify-start w-full py-2 px-4 text-white transition-colors duration-300">
                    <i className="fas fa-sign-out-alt text-2xl mr-2"></i>
                    <span className="nav-text hidden text-base">Logout</span>
                </Link>
            </div>

            <div className="container flex-1 ml-20 p-10">
                <h2 className="text-3xl mb-6 ml-10">Soal Ujian</h2>
                <div className="absolute top-7 right-12 mt-6 ml-5">
                    <i className="fas fa-user shadow-lg text-2xl"></i>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-10 gap-6">
                    {["Ujian 1", "Ujian 2", "Ujian 3", "Ujian 4"].map((ujian) => (
                        <div
                        className="card bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between h-[200px] w-[275px] border border-gray-300"
                        key={ujian}>
                        <h3 className="text-lg font-bold mb-1">{ujian}</h3>
                        <p>Waktu: 60 Menit<br />Jumlah Soal: 50</p>
                        <button
                            className="mt-4 bg-black text-white py-2 px-6 rounded-full text-sm hover:bg-gray-800"
                            onClick={() => handleExamClick(ujian)}>
                            Mulai
                        </button>
                        </div>
                    ))}
                </div>
            </div>

            {isConfirmationVisible && (
                <div className="fixed inset-0 flex items-center justify-center shadow-lg  bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-5 text-center">
                        <h3 className="text-lg font-bold mb-3">
                            {selectedExam === "Ujian 1" ? "Apakah Anda ingin memulai ujian?" : "Anda belum mengerjakan Ujian 1"}
                        </h3>
                        <div>
                            <button className="bg-green-500 shadow-lg text-white px-4 py-2 rounded mr-2" onClick={handleConfirm}>Ya</button>
                            <button className="bg-red-500 shadow-lg text-white px-4 py-2 rounded" onClick={() => setConfirmationVisible(false)}>Tidak</button>
                        </div>
                    </div>
                </div>
            )}

            {isNotificationVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-5 text-center">
                        <h3 className="text-lg font-bold mb-3">{notificationMessage}</h3>
                        <button className="bg-blue-500 shadow-lg text-white px-4 py-2 rounded" onClick={closeNotification}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Soal;
