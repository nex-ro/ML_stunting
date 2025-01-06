import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebaseApp from "../configuration";
import Container from '../component/container';
import '../style/history.css'; // Import CSS file

const History = () => {
  const [examinations, setExaminations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counts, setCounts] = useState({ normal: 0, tinggi: 0, stunted: 0, severelyStunted: 0 });
  const db = getDatabase(firebaseApp);

  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true);
        const pemeriksaanRef = ref(db, 'pemeriksaan');

        onValue(
          pemeriksaanRef,
          (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              const formattedData = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
              }));
              const sortedData = formattedData.sort(
                (a, b) => new Date(b.tanggal) - new Date(a.tanggal)
              );

              // Calculate counts for each category
              const counts = sortedData.reduce(
                (acc, item) => {
                  const status = item.status_prediksi?.toLowerCase();
                  if (status === 'normal') acc.normal++;
                  else if (status === 'tinggi') acc.tinggi++;
                  else if (status === 'stunted') acc.stunted++;
                  else if (status === 'severely stunted') acc.severelyStunted++;
                  return acc;
                },
                { normal: 0, tinggi: 0, stunted: 0, severelyStunted: 0 }
              );

              setCounts(counts);
              setExaminations(sortedData);
            } else {
              setExaminations([]);
              setCounts({ normal: 0, tinggi: 0, stunted: 0, severelyStunted: 0 });
            }
            setError(null);
          },
          (err) => {
            console.error('Error fetching data:', err);
            setError('Terjadi kesalahan saat mengambil data.');
          }
        );
      } catch (err) {
        console.error(err);
        setError('Terjadi kesalahan tidak terduga.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [db]);

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '-';
      return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error('Date formatting error:', error);
      return '-';
    }
  };

  const getGender = (code) => {
    return code === "0" ? "Laki-laki" : code === "1" ? "Perempuan" : "-";
  };

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'tinggi':
        return 'status-high';
      case 'stunted':
        return 'status-low';
      case 'severely stunted':
        return 'status-severe';
      case 'normal':
        return 'status-normal';
      default:
        return 'status-unknown';
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Memuat data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h4>Error:</h4>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <Container>
      <h2 className="title">Riwayat Pemeriksaan</h2>
      <div className="summary">
        <p>Normal: {counts.normal}</p>
        <p>Tinggi: {counts.tinggi}</p>
        <p>Stunted: {counts.stunted}</p>
        <p>Severely Stunted: {counts.severelyStunted}</p>
      </div>
      <table className="history-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Jenis Kelamin</th>
            <th>Tinggi</th>
            <th>Status Prediksi</th>
          </tr>
        </thead>
        <tbody>
          {examinations.length > 0 ? (
            examinations.map((exam, index) => (
              <tr key={exam.id}>
                <td>{index + 1}</td>
                <td>{formatDate(exam.tanggal)}</td>
                <td>{exam.nama || '-'}</td>
                <td>{exam.umur || '-'}</td>
                <td>{getGender(exam.jenis_kelamin)}</td>
                <td>{exam.tinggi || '-'} cm</td>
                <td>
                  <span className={`status ${getStatusClass(exam.status_prediksi)}`}>
                    {exam.status_prediksi || '-'}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">
                Tidak ada data tersedia
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default History;
