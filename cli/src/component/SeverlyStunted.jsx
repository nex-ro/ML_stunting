import "../style/main.css";
import React from "react";

const SeverelyStunted = () => {
  return (
    <div className="severely-stunted-container">
      <div className="severely-stunted-wrapper">
        <div className="severely-stunted-content">
          <div className="header-section">
            <h1 className="main-title">Status Gizi Severely Stunted</h1>
            <p className="main-description">
              Status gizi severely stunted adalah kondisi gizi yang sangat parah,
              di mana tinggi badan anak jauh di bawah standar pertumbuhan untuk
              usianya, sering disebabkan oleh kekurangan gizi jangka panjang.
            </p>
          </div>

          <div className="content-grid">
            <div className="content-card">
              <h3 className="section-title">Ciri-ciri</h3>
              <ul className="feature-list">
                <li>Tinggi badan anak sangat jauh di bawah kurva pertumbuhan.</li>
                <li>Perkembangan fisik dan kognitif terganggu.</li>
                <li>Anak sering sakit dan terlihat sangat lemah.</li>
              </ul>
            </div>

            <div className="content-card">
              <h3 className="section-title">Langkah yang Perlu Dilakukan</h3>
              <ul className="feature-list">
                <li>
                  Segera bawa anak ke fasilitas kesehatan untuk mendapatkan
                  intervensi medis.
                </li>
                <li>
                  Berikan makanan padat gizi seperti Ready-to-Use Therapeutic Food (RUTF).
                </li>
                <li>
                  Pantau kondisi anak secara intensif dan hindari infeksi dengan
                  menjaga kebersihan lingkungan.
                </li>
              </ul>
            </div>
          </div>

          <div className="info-box">
            <p>
              Kondisi severely stunted memerlukan penanganan medis segera untuk
              mencegah komplikasi serius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeverelyStunted;
