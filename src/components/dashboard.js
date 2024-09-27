import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Dashboard() {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("w-14");
    sidebar.classList.toggle("w-56");

    const navTexts = sidebar.querySelectorAll('.nav-text');
    navTexts.forEach(text => {
      text.classList.toggle('hidden');
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="sidebar bg-blue-500 flex flex-col items-center justify-between py-5 px-0 fixed left-10 top-1/2 transform -translate-y-1/2 h-[95%] w-14 rounded-lg transition-all duration-300" id="sidebar">
        <button
          className="toggle-btn mb-5 bg-transparent border-none cursor-pointer"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <i className="fas fa-bars text-white text-2xl"></i>
        </button>
        <a href="/soal" className="nav-item flex items-center justify-start w-full py-2 px-4 mb-5 text-white transition-colors duration-300">
          <i className="fas fa-file-alt text-2xl mr-2"></i>
          <span className="nav-text hidden text-base">Soal Ujian</span>
        </a>
        <a href="/registration" className="nav-item logout mt-auto flex items-center justify-start w-full py-2 px-4 text-white transition-colors duration-300">
          <i className="fas fa-sign-out-alt text-2xl mr-2"></i>
          <span className="nav-text hidden text-base">Logout</span>
        </a>
      </div>

      <div class="main-content bg-white rounded-lg shadow-lg p-12 w-[70%] max-w-[1500px] ml-38 flex flex-col justify-center">
        <h2 className="text-2xl mb-8 font-bold">Input Data Diri</h2>
        <form className="space-y-6">
          <div className="input-group flex flex-col mb-5 w-full">
            <label className="text-sm mb-2">ID User</label>
            <input type="text" placeholder="ID User" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full" />
          </div>
          <div className="input-group flex flex-col mb-5 w-full">
            <label className="text-sm mb-2">Nama Peserta</label>
            <input type="text" placeholder="Nama Peserta" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full" />
          </div>
          <div className="input-group flex flex-col mb-5 w-full">
            <label className="text-sm mb-2">Deskripsi</label>
            <input type="text" placeholder="Deskripsi" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full" />
          </div>
          <div className="input-group flex flex-col mb-5 w-full">
            <label className="text-sm mb-2">Nama Instansi</label>
            <input type="text" placeholder="Nama Instansi" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full" />
          </div>
          <div className="input-group flex flex-col mb-5 w-full">
            <label className="text-sm mb-2">Tanggal Ujian</label>
            <input type="date" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full" />
          </div>
          <button type="submit" className="submit-btn bg-black text-white py-2 px-8 rounded-full cursor-pointer text-base mt-8 self-end hover:bg-gray-800">
            Selesai
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
