import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Menu, LogOut, FileText, ChevronLeft } from 'lucide-react';

const examDataInitial = [
  { id: "0001", lembaga: "SMKN 1 SURABAYA", jumlahPeserta: 100, tanggal: "01/03/24" },
  { id: "0002", lembaga: "PT Bank Mandiri", jumlahPeserta: 150, tanggal: "02/03/24" },
  { id: "0003", lembaga: "RSUD Jakarta", jumlahPeserta: 120, tanggal: "03/03/24" },
  { id: "0004", lembaga: "Universitas Gadjah Mada", jumlahPeserta: 130, tanggal: "04/03/24" },
  { id: "0005", lembaga: "Kantor Pos Indonesia", jumlahPeserta: 110, tanggal: "05/03/24" },
  { id: "0006", lembaga: "SMA Negeri 1 Bandung", jumlahPeserta: 140, tanggal: "06/03/24" },
  { id: "0007", lembaga: "PT Telkom Indonesia", jumlahPeserta: 160, tanggal: "07/03/24" },
  { id: "0008", lembaga: "RSUP Persahabatan", jumlahPeserta: 170, tanggal: "08/03/24" },
  { id: "0009", lembaga: "SMA Taruna Nusantara", jumlahPeserta: 115, tanggal: "09/03/24" },
  { id: "0010", lembaga: "Hotel Aston", jumlahPeserta: 125, tanggal: "10/03/24" },
  { id: "0011", lembaga: "Kementerian Kesehatan", jumlahPeserta: 140, tanggal: "11/03/24" },
  { id: "0012", lembaga: "SMA Negeri 2 Tangerang", jumlahPeserta: 130, tanggal: "12/03/24" },
  { id: "0013", lembaga: "PT Unilever Indonesia", jumlahPeserta: 100, tanggal: "13/03/24" },
  { id: "0014", lembaga: "Bank BCA", jumlahPeserta: 150, tanggal: "14/03/24" },
  { id: "0015", lembaga: "SMK Negeri 5 Surabaya", jumlahPeserta: 120, tanggal: "15/03/24" },
  { id: "0016", lembaga: "SMA Negeri 3 Malang", jumlahPeserta: 135, tanggal: "16/03/24" },
  { id: "0017", lembaga: "Kantor Imigrasi", jumlahPeserta: 80, tanggal: "17/03/24" },
  { id: "0018", lembaga: "PT Astra International", jumlahPeserta: 90, tanggal: "18/03/24" },
  { id: "0019", lembaga: "RSU dr. Cipto Mangunkusumo", jumlahPeserta: 140, tanggal: "19/03/24" },
  { id: "0020", lembaga: "Universitas Indonesia", jumlahPeserta: 200, tanggal: "20/03/24" },
  { id: "0021", lembaga: "PT Pertamina", jumlahPeserta: 160, tanggal: "21/03/24" },
  { id: "0022", lembaga: "SMA Kristen 1 Jakarta", jumlahPeserta: 100, tanggal: "22/03/24" },
  { id: "0023", lembaga: "Kantor Pajak Pratama", jumlahPeserta: 110, tanggal: "23/03/24" },
  { id: "0024", lembaga: "PT Indofood", jumlahPeserta: 130, tanggal: "24/03/24" },
  { id: "0025", lembaga: "RSUD Dr. Soetomo", jumlahPeserta: 115, tanggal: "25/03/24" },
  { id: "0026", lembaga: "Universitas Airlangga", jumlahPeserta: 140, tanggal: "26/03/24" },
  { id: "0027", lembaga: "SMK Negeri 2 Jakarta", jumlahPeserta: 125, tanggal: "27/03/24" },
  { id: "0028", lembaga: "Kantor Gubernur DKI Jakarta", jumlahPeserta: 90, tanggal: "28/03/24" },
  { id: "0029", lembaga: "PT Sinar Mas", jumlahPeserta: 160, tanggal: "29/03/24" },
  { id: "0030", lembaga: "RSU dr. Hasan Sadikin", jumlahPeserta: 130, tanggal: "30/03/24" },
  { id: "0031", lembaga: "SMAN 1 Surabaya", jumlahPeserta: 140, tanggal: "31/03/24" },
  { id: "0032", lembaga: "PT Jasa Marga", jumlahPeserta: 100, tanggal: "01/04/24" },
  { id: "0033", lembaga: "Kementerian Pendidikan", jumlahPeserta: 150, tanggal: "02/04/24" },
  { id: "0034", lembaga: "RSU dr. Sardjito", jumlahPeserta: 120, tanggal: "03/04/24" },
  { id: "0035", lembaga: "Universitas Diponegoro", jumlahPeserta: 130, tanggal: "04/04/24" },
  { id: "0036", lembaga: "SMK PGRI 2 Surabaya", jumlahPeserta: 110, tanggal: "05/04/24" },
  { id: "0037", lembaga: "PT Semen Indonesia", jumlahPeserta: 140, tanggal: "06/04/24" },
  { id: "0038", lembaga: "SMA Negeri 4 Yogyakarta", jumlahPeserta: 170, tanggal: "07/04/24" },
  { id: "0039", lembaga: "Kantor Walikota Surabaya", jumlahPeserta: 150, tanggal: "08/04/24" },
  { id: "0040", lembaga: "PT Garuda Indonesia", jumlahPeserta: 180, tanggal: "09/04/24" },
  { id: "0041", lembaga: "Universitas Padjajaran", jumlahPeserta: 190, tanggal: "10/04/24" },
  { id: "0042", lembaga: "SMA Islam Al-Azhar", jumlahPeserta: 160, tanggal: "11/04/24" },
  { id: "0043", lembaga: "SMK Negeri 3 Bandung", jumlahPeserta: 120, tanggal: "12/04/24" },
  { id: "0044", lembaga: "PT Bank Central Asia", jumlahPeserta: 150, tanggal: "13/04/24" },
  { id: "0045", lembaga: "RSU dr. Moewardi", jumlahPeserta: 110, tanggal: "14/04/24" },
  { id: "0046", lembaga: "Kementerian Sosial", jumlahPeserta: 90, tanggal: "15/04/24" },
  { id: "0047", lembaga: "Universitas Hasanuddin", jumlahPeserta: 130, tanggal: "16/04/24" },
  { id: "0048", lembaga: "PT Telekomunikasi Indonesia", jumlahPeserta: 160, tanggal: "17/04/24" },
  { id: "0049", lembaga: "SMK Negeri 1 Cirebon", jumlahPeserta: 140, tanggal: "18/04/24" },
  { id: "0050", lembaga: "SMA Negeri 1 Semarang", jumlahPeserta: 150, tanggal: "19/04/24" }
];

export function Ujian() {
  const [isOpen, setIsOpen] = useState(true);
  const [statuses, setStatuses] = useState(examDataInitial.reduce((acc, exam) => ({ ...acc, [exam.id]: false }), {}));
  const [modalOpen, setModalOpen] = useState(false);
  const [newExam, setNewExam] = useState({ name: '', date: '', status: '', subject: '' });
  const [examData, setExamData] = useState(examDataInitial);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusChange = (id) => {
    setStatuses(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExam(prev => ({ ...prev, [name]: value }));
  };

  const addExam = () => {
    const newId = String(examData.length + 1).padStart(4, '0');
    setExamData(prev => [...prev, { id: newId, lembaga: newExam.name, jumlahPeserta: 0, tanggal: newExam.date }]);
    setModalOpen(false);
    setNewExam({ name: '', date: '', status: '', subject: '' });
  };

  return (
    <div className={`h-screen bg-white text-gray-900 flex`}>
      <nav className={`fixed top-0 left-0 h-full flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'} bg-blue-400 rounded-r-2xl`}>
        <button className="w-full py-3 px-4 flex items-center justify-between hover:bg-blue-300 transition-colors duration-200" onClick={toggleSidebar}>
          <div className="flex items-center">
            <Menu className="w-6 h-6 mr-3 text-white" /> {isOpen && <span className="text-lg font-medium text-white">Menu</span>}
          </div>
          {isOpen && <ChevronLeft className="w-5 h-5 text-white" />}
        </button>

        <Link to="/soal" className="w-full py-3 px-4 flex items-center hover:bg-blue-300 transition-colors duration-200">
          <FileText className="w-6 h-6 mr-3 text-white" />
          {isOpen && <span className="text-white">Soal</span>}
        </Link>

        <div className="mb-8">
          <Link to="/ujian" className="w-full py-3 px-4 flex items-center hover:bg-blue-300 transition-colors duration-200">
            <i className="fa-university w-6 h-6 mr-3 text-white"></i>
            {isOpen && <span className="text-white">Ujian</span>}
          </Link>
        </div>

        <div className="mt-auto">
          <Link to="/registration" className="w-full py-3 px-4 flex items-center hover:bg-blue-300 transition-colors duration-200">
            <LogOut className="w-6 h-6 mr-3 text-white" />
            {isOpen && <span className="text-white">Logout</span>}
          </Link>
        </div>
      </nav>

      <div className={`flex-1 p-6 transition-all duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-16'}`}>
        <div className="flex justify-between mb-4">
          <button onClick={() => setModalOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">Tambah Ujian</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Ujian</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lembaga</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah Peserta</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {examData.map((exam) => (
                <tr key={exam.id}>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" checked={statuses[exam.id]} onChange={() => handleStatusChange(exam.id)} className="sr-only peer"/>
                      <div className={`relative w-11 h-6 ${statuses[exam.id] ? 'bg-blue-600' : 'bg-gray-200'} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600`}></div>
                    </label>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{exam.id}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{exam.lembaga}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 hover:underline"><Link to={`/results`}>{exam.jumlahPeserta}</Link></td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{exam.tanggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">

            <div className="mb-3">
               <label className="block mb-1" htmlFor="name">Nama</label>
               <input type="text" placeholder="Masukan Nama" name="name" value={newExam.name} onChange={handleInputChange} className="p-2 w-full shadow rounded-md focus:outline-none"/>
            </div>

            <div className="mb-3">
              <label className="block mb-1" htmlFor="name">Jumlah Peserta</label>
              <input type="text" placeholder="Masukan Jumlah" name="jumlah" value={newExam.jumlahPeserta} onChange={handleInputChange} className="p-2 w-full shadow rounded-md focus:outline-none"/>
            </div>

            <div className="mb-3">
               <label className="block mb-1" htmlFor="status">Status</label>
               <select name="status" value={newExam.status} onChange={handleInputChange} className="p-2 w-full shadow rounded-md focus:outline-none">
                 <option value="">Pilih Status</option>
                 <option value="Aktif">Aktif</option>
                 <option value="Tidak Aktif">Tidak Aktif</option>
               </select>
            </div>

            <div className="mb-3">
               <label className="block mb-1" htmlFor="subject">Subject</label>
               <select name="subject" value={newExam.subject} onChange={handleInputChange} className="p-2 w-full shadow rounded-md focus:outline-none">
                <option value="">Pilih Subject</option>
                <option value="subject 1">Subject 1</option>
                <option value="subject 2">Subject 2</option>
               </select>
            </div>

            <div className="mb-3">
               <label className="block mb-1" htmlFor="date">Tanggal</label>
               <input type="date" name="date" value={newExam.date} onChange={handleInputChange} className="p-2 w-full shadow rounded-md focus:outline-none" />
            </div>

            <div className="flex justify-end">
               <button onClick={addExam} className="px-4 py-2 bg-blue-500 text-white rounded">Simpan</button>
               <button onClick={() => setModalOpen(false)} className="ml-2 px-4 py-2 bg-gray-300 rounded">Batal</button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ujian;