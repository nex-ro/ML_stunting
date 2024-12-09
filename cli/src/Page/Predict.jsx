import React, { useState } from 'react';
import axios from 'axios';

function Predict() {
    const [umur, setUmur] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [tinggiBadan, setTinggiBadan] = useState('');
    const [prediction, setPrediction] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                umur: parseInt(umur),
                jenis_kelamin: parseInt(jenisKelamin),
                tinggi_badan: parseFloat(tinggiBadan),
            });
            setPrediction(response.data.prediction);
        } catch (error) {
            setPrediction(`Error: ${error.response?.data?.error || error.message}`);
        }
    };

    return (
        <div className="App">
            <h1>Prediksi Status Gizi</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Umur (bulan):</label>
                    <input
                        type="number"
                        value={umur}
                        onChange={(e) => setUmur(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Jenis Kelamin (0 = Laki-laki, 1 = Perempuan):</label>
                    <input
                        type="number"
                        value={jenisKelamin}
                        onChange={(e) => setJenisKelamin(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tinggi Badan (cm):</label>
                    <input
                        type="number"
                        value={tinggiBadan}
                        onChange={(e) => setTinggiBadan(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Prediksi</button>
            </form>
            {prediction && <h2>Hasil: {prediction}</h2>}
        </div>
    );
}

export default Predict;
