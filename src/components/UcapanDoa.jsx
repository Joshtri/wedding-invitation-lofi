import { useState } from 'react';
import axios from 'axios';

const UcapanDoa = ({ onAddUcapan }) => {
  const [kehadiran, setKehadiran] = useState('');
  const [nama, setNama] = useState('');
  const [ucapan, setUcapan] = useState('');

  const handleConfirmation = async (e) => {
    e.preventDefault();
    try {
      const newUcapan = { nama, ucapan, kehadiran };
      // Post the data to the backend
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/ucapan-doa`, newUcapan);
      
      // Trigger the callback to add the new comment to the list
      onAddUcapan(response.data);
      
      // Reset form fields
      setKehadiran('');
      setNama('');
      setUcapan('');

      alert('Terima kasih atas konfirmasi Anda!');
    } catch (error) {
      console.error('Error posting data:', error);
      alert('Gagal mengirim ucapan, coba lagi.');
    }
  };

  return (
    <div className="py-12 text-center p-4 bg-slate-100 bg-opacity-30">
      <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>Ucapan & Doa</h2>
      <p className="mb-3" style={{ fontFamily: 'EB Garamond, serif' }}>Tuliskan ucapan & doa terbaikmu saat ini bagi kedua mempelai</p>
      <form onSubmit={handleConfirmation} className="max-w-lg mx-auto">
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama Anda"
          className="w-full p-2 mb-4 border rounded"
          style={{ fontFamily: 'EB Garamond, serif' }}
          required
        />
        <select
          value={kehadiran}
          onChange={(e) => setKehadiran(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          style={{ fontFamily: 'EB Garamond, serif' }}
          required
        >
          <option value="" disabled>Pilih konfirmasi kehadiran Anda</option>
          <option value="Hadir">Hadir</option>
          <option value="Akan Hadir">Akan Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <textarea
          value={ucapan}
          onChange={(e) => setUcapan(e.target.value)}
          placeholder="Ucapan & Doa"
          className="w-full p-2 mb-4 border rounded"
          rows="4"
          style={{ fontFamily: 'EB Garamond, serif' }}
          required
        />
        <button type="submit" className="bg-black text-white py-2 px-4 rounded" style={{ fontFamily: 'EB Garamond, serif' }}>
          Konfirmasi
        </button>
      </form>
    </div>
  );
};

export default UcapanDoa;
