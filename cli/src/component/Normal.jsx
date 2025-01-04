import "../style/main.css";
import React from "react";

const Normal = () => {
  return (
    <div className="normal-container">
      <div className="normal-wrapper">
        <div className="normal-content">
          <div className="header-section">
            <h1 className="main-title">Status Gizi Normal</h1>
            <p className="main-description">
              Status gizi normal adalah kondisi di mana tinggi dan berat badan anak
              berada dalam rentang standar yang sesuai dengan usianya, menunjukkan
              pertumbuhan dan kesehatan yang optimal.
            </p>
          </div>

          <div className="content-grid">
            <div className="content-card">
              <h3 className="section-title">Ciri-ciri</h3>
              <ul className="feature-list">
                <li>Tinggi dan berat badan sesuai dengan kurva pertumbuhan WHO.</li>
                <li>Anak terlihat aktif dan memiliki energi yang cukup.</li>
                <li>Indikator kesehatan lain, seperti daya tahan tubuh, baik.</li>
              </ul>
            </div>

            <div className="content-card">
              <h3 className="section-title">Langkah yang Perlu Dilakukan</h3>
              <ul className="feature-list">
                <li>
                  Berikan makanan yang seimbang dan variatif, mencakup semua zat gizi.
                </li>
                <li>
                  Pastikan anak memiliki waktu tidur yang cukup dan berkualitas.
                </li>
                <li>
                  Lakukan pemantauan kesehatan secara berkala untuk memastikan anak
                  tetap sehat.
                </li>
              </ul>
            </div>
          </div>

          <div className="info-box">
            <p>
              Anak dengan status gizi normal memerlukan perhatian rutin untuk menjaga
              keseimbangan pertumbuhan dan kesehatannya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Normal;
