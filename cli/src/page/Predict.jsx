import React, { useState, useRef, useEffect, useMemo } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import gambar1 from "../style/img/1.png";
import gambar2 from "../style/img/2.png";
import gambar3 from "../style/img/3.png";
import gambar4 from "../style/img/4.png";
import "../style/predict.css";

const Predict = () => {
  const initialValue = 54;
  const [umur, setUmur] = useState("");
  const [gender, setGender] = useState(null);
  const [tinggiBadan, setTinggiBadan] = useState(initialValue);
  const [isDragging, setIsDragging] = useState(false);
  const [startValue, setStartValue] = useState(0);
  const containerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gender) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      Toast.fire({
        icon: "error",
        title: "Silakan pilih jenis kelamin",
      });
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        umur: parseInt(umur),
        jenis_kelamin: gender === "male" ? 0 : 1,
        tinggi_badan: parseFloat(tinggiBadan),
      });

      Swal.fire({
        title: "Hasil Pemeriksaan Anda",
        html: `
          <div>
            <p>Hasil prediksi Anda:</p>
            <strong>${response.data.prediction}</strong>
            <p>Gunakan hasil ini untuk analisis lebih lanjut.</p>
          </div>
        `,
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Ulangi",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("User confirmed the result.");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log("User chose to retry.");
        }
      });
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      Toast.fire({
        icon: "error",
        title: error.response?.data?.error || error.message,
      });
    }
  };

  const positionToValue = (clientX) => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const diff = (clientX - centerX) / 10;
    const newValue = Math.round(startValue - diff);
    return Math.max(0, Math.min(200, newValue));
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartValue(tinggiBadan);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = useMemo(() => {
    let animationFrame;
    return (e) => {
      if (!isDragging) return;
      if (animationFrame) cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const newValue = positionToValue(e.clientX);
        setTinggiBadan(newValue);
      });
    };
  }, [isDragging]);

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove]);

  const translateX = tinggiBadan * 10;

  const rulerMarks = useMemo(
    () =>
      Array.from({ length: 201 }, (_, i) => (
        <div
          key={i}
          className={`ruler-mark ${
            i % 10 === 0
              ? "major"
              : i % 5 === 0
              ? "medium"
              : "minor"
          }`}
          style={{ left: `${i * 10}px` }}
        >
          {i % 10 === 0 && <span className="ruler-number">{i}</span>}
        </div>
      )),
    []
  );

  const GenderIcon = ({ type, isSelected }) => {
    if (isSelected) {
      return <img src={type === "male" ? gambar2 : gambar4} alt="" width="100%" />;
    }

    return <img src={type === "male" ? gambar1 : gambar3} width="100%" />;
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1 className="title">Periksa Status Gizi Anak</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label">Umur (bulan):</label>
            <input
              type="number"
              value={umur}
              onChange={(e) => setUmur(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Jenis Kelamin:</label>
            <div className="gender-container">
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`gender-button ${gender === "male" ? "selected" : ""}`}
              >
                <GenderIcon type="male" isSelected={gender === "male"} />
              </button>
              <button
                type="button"
                onClick={() => setGender("female")}
                className={`gender-button ${gender === "female" ? "selected" : ""}`}
              >
                <GenderIcon type="female" isSelected={gender === "female"} />
              </button>
            </div>
          </div>
          <div className="form-group">
            <label className="label">Tinggi Badan:</label>
            <div
              ref={containerRef}
              className="ruler-container"
              onMouseDown={handleMouseDown}
            >
              <div className="ruler-pointer" />
              <div
                className="ruler-scale"
                style={{
                  transform: `translateX(${-translateX}px)`,
                  willChange: "transform",
                  transition: "none",
                }}
              >
                {rulerMarks}
              </div>
            </div>
            <div className="lineLurus">
              Tinggi Badan &nbsp;
              <input
                type="number"
                value={tinggiBadan}
                onChange={(e) => {
                  const newValue = Math.max(
                    0,
                    Math.min(200, parseInt(e.target.value) || 0)
                  );
                  setTinggiBadan(newValue);
                }}
                className="height-input"
                min="0"
                max="200"
              />
              &nbsp; Cm
            </div>
          </div>
          <button type="submit" className="submit-button">
            Prediksi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Predict;
