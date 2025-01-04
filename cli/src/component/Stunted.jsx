import "../style/main.css";
import React from "react";

const Stunted = () => {
  return (
    <div className="stunted-container">
      <div className="stunted-wrapper">
        <div className="stunted-content">
          <div className="header-section">
            <h1 className="main-title">Status Gizi Stunted</h1>
            <p className="main-description">
              Status gizi stunted adalah kondisi di mana tinggi badan anak lebih
              rendah dari standar usianya akibat kekurangan gizi kronis selama
              periode penting pertumbuhan.
            </p>
          </div>

          <div className="content-grid">
            <div className="content-card">
              <h3 className="section-title">Ciri-ciri</h3>
              <ul className="feature-list">
                <li>Tinggi badan anak di bawah kurva standar pertumbuhan WHO.</li>
                <li>Sering mengalami kelelahan dan kurang aktif.</li>
                <li>Berat badan sering tidak seimbang dengan tinggi badan.</li>
              </ul>
            </div>

            <div className="content-card">
              <h3 className="section-title">Langkah yang Perlu Dilakukan</h3>
              <ul className="feature-list">
                <li>
                  Berikan makanan tinggi gizi seperti protein, zat besi, dan vitamin A.
                </li>
                <li>
                  Pastikan anak menerima ASI eksklusif selama 6 bulan pertama.
                </li>
                <li>
                  Konsultasikan ke tenaga kesehatan untuk memantau pertumbuhan
                  anak secara teratur.
                </li>
              </ul>
            </div>
          </div>

          <div className="info-box">
            <p>
              Penanganan dini terhadap stunting sangat penting untuk mencegah
              dampak jangka panjang terhadap kesehatan anak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stunted;
