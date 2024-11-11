import React from 'react';

const examData = [
  { id: "0001", nama: "Nafisa Aqila Aninditha", hasil: 100, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0002", nama: "Muhammad Rizki", hasil: 115, tanggal: "10/09/24", keterangan: <span>Progress <strong>2 dari 3</strong></span>, isComplete: false},
  { id: "0003", nama: "Nabila Puteri", hasil: 102, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0004", nama: "Ahmad Syaifuddin", hasil: 105, tanggal: "10/09/24", keterangan: <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0005", nama: "Laili Ramadhani", hasil: 97, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0006", nama: "Rachmad Dwi", hasil: 110, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0007", nama: "Aniela Aiko", hasil: 100, tanggal: "10/09/24", keterangan: <span>Progress <strong>2 dari 3</strong></span>, isComplete: false },
  { id: "0008", nama: "Naysila Cahya", hasil: 108, tanggal: "10/09/24", keterangan: <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0009", nama: "Kalyca Nasywa", hasil: 119, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0010", nama: "Annisa Naila", hasil: 102, tanggal: "10/09/24", keterangan: <span>Progress <strong>2 dari 3</strong></span>, isComplete: false },
  { id: "0011", nama: "Maximus Krisna", hasil: 101, tanggal: "10/09/24", keterangan: <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0012", nama: "Naila Izza", hasil: 110, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false},
  { id: "0013", nama: "Praba Wirayudha", hasil: 125, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0014", nama: "Rizky Aditya", hasil: 99, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0015", nama: "Indah Permatasari", hasil: 120, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0016", nama: "Fahri Setiawan", hasil: 115, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0017", nama: "Siti Fatimah", hasil: 95, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0018", nama: "Budi Santoso", hasil: 107, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0019", nama: "Diana Kurnia", hasil: 111, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0020", nama: "Fikri Rahman", hasil: 108, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0021", nama: "Nina Wijaya", hasil: 113, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0022", nama: "Arief Hidayat", hasil: 118, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false},
  { id: "0023", nama: "Sari Dewi", hasil: 104, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0024", nama: "Eko Prasetyo", hasil: 100, tanggal: "10/09/24", keterangan: <span>Progress <strong>2 dari 3</strong></span>, isComplete: false },
  { id: "0025", nama: "Tia Shabrina", hasil: 99, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0026", nama: "Rina Amelia", hasil: 96, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0027", nama: "Hendra Susanto", hasil: 105, tanggal: "10/09/24", keterangan: <span>Progress <strong>2 dari 3</strong></span>, isComplete: false },
  { id: "0028", nama: "Rudy Hartono", hasil: 112, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0029", nama: "Dewi Anggraini", hasil: 119, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0030", nama: "Yusuf Muhammad", hasil: 102, tanggal: "10/09/24", keterangan: <span>Progress <strong>2 dari 3</strong></span>, isComplete: false },
  { id: "0031", nama: "Citra Ningsih", hasil: 106, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0032", nama: "Vina Widiastuti", hasil: 114, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0033", nama: "Dimas Pramudya", hasil: 121, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0034", nama: "Ayu Kurniasari", hasil: 97, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0035", nama: "Agung Setiawan", hasil: 103, tanggal: "10/09/24", keterangan: <span>Progress <strong>2 dari 3</strong></span>,isComplete: false },
  { id: "0036", nama: "Suci Rahmawati", hasil: 110, tanggal: "10/09/24", keterangan: <span>Progress <strong>2 dari 3</strong></span>,isComplete: false },
  { id: "0037", nama: "Arni Setyowati", hasil: 99, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0038", nama: "Iwan Kurniawan", hasil: 104, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>,isComplete: false },
  { id: "0039", nama: "Julianto", hasil: 100, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0040", nama: "Erni Susanti", hasil: 107, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0041", nama: "Rizal Ramadhan", hasil: 115, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>,isComplete: false },
  { id: "0042", nama: "Fajar Setiadi", hasil: 98, tanggal: "10/09/24", keterangan: <span>Progress <strong>2 dari 3</strong></span>,isComplete: false },
  { id: "0043", nama: "Siti Khadijah", hasil: 105, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0044", nama: "Ali Rahman", hasil: 109, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0045", nama: "Dani Permana", hasil: 111, tanggal: "10/09/24", keterangan: <span>Progress <strong>2 dari 3</strong></span>, isComplete: false },
  { id: "0046", nama: "Lia Mulyani", hasil: 106, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0047", nama: "Yuli Setyawati", hasil: 113, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false },
  { id: "0048", nama: "Bobby Kurniawan", hasil: 120, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0049", nama: "Tia Maharani", hasil: 99, tanggal: "10/09/24", keterangan:  <span>Dikerjakan <strong>3 dari 3</strong></span>, isComplete: true },
  { id: "0050", nama: "Dewi Lestari", hasil: 115, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>, isComplete: false }
];

const Results = () => {

  return (
    <div className="overflow-x-auto shadow-md rounded-lg my-3 mr-3 border-2">
    <table className="w-full text-sm text-left">
      <thead className="text-gray-700 uppercase bg-gray-200 sticky top-0 z-20">
        <tr>
          <th className="px-6 py-3 text-center ">ID</th>
          <th className="px-6 py-3 text-center">Nama Lengkap</th>
          <th className="px-6 py-3 text-center">Hasil Tes</th>
          <th className="px-6 py-3 text-center">Tanggal</th>
          <th className="px-6 py-3 text-center">Keterangan</th>
        </tr>
      </thead>
      <tbody>
        {examData.map((item) => (
          <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4 text-center">{item.id}</td>
            <td className="px-6 py-4 text-center">{item.nama}</td>
            <td className="px-6 py-4 text-center">{item.hasil}</td>
            <td className="px-6 py-4 text-center">{item.tanggal}</td>
            <td className="px-6 py-4 text-center">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold
              ${item.isComplete 
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
              }`}
            >
              {item.keterangan}
            </span>
          </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Results;