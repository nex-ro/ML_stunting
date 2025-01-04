import "../style/main.css";
import React from 'react';

const Tinggi = () => {
  return (
      <div className="tinggi-wrapper">
        <div className="tinggi-content">
          {/* Header Section */}
          <div className="header-section">
            <h1 className="main-title">Status Gizi Tinggi</h1>
            <p className="main-description">
              Status gizi tinggi adalah kondisi di mana anak memiliki tinggi badan
              di atas rata-rata sesuai dengan standar usianya. Hal ini biasanya
              menunjukkan pertumbuhan yang optimal dan kecukupan asupan nutrisi.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="content-grid">
            {/* Characteristics Section */}
            <div className="content-card">
              <h3 className="section-title">Ciri-ciri</h3>
              <ul className="feature-list">
                <li>Tinggi badan anak berada di atas kurva normal berdasarkan WHO.</li>
                <li>Aktivitas fisik anak terlihat baik dan sesuai dengan usianya.</li>
                <li>Indikasi kesehatan lain, seperti berat badan, juga normal.</li>
              </ul>
            </div>

            {/* Steps Section */}
            <div className="content-card">
              <h3 className="section-title">Langkah yang Perlu Dilakukan</h3>
              <ul className="feature-list">
                <li>
                  Pastikan anak tetap mendapatkan asupan makanan yang seimbang,
                  mencakup karbohidrat, protein, lemak, vitamin, dan mineral.
                </li>
                <li>
                  Dorong anak untuk melakukan aktivitas fisik secara teratur untuk
                  menjaga keseimbangan tubuh.
                </li>
                <li>
                  Rutin memantau pertumbuhan melalui posyandu atau fasilitas
                  kesehatan untuk memastikan perkembangan yang sesuai.
                </li>
                <li>
                  Hindari makanan yang tinggi gula dan lemak berlebih untuk mencegah
                  risiko obesitas.
                </li>
              </ul>
            </div>
          </div>

          {/* Info Box */}
          <div className="info-box">
            <p>
              Pertumbuhan yang optimal adalah tanda bahwa anak mendapatkan nutrisi yang cukup.
              Tetap pantau perkembangan anak secara berkala untuk memastikan kesehatan yang berkelanjutan.
            </p>
          </div>
        </div>
      </div>
  );
};

export default Tinggi;