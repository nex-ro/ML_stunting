import React from 'react';
import "../style/navbar.css"
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();

    const home = () => {
      navigate('/');
    };
    const cegah = () => {
        navigate('/mencegah');
      };
      const atasi = () => {
        navigate('/mengatasi');
      };
    const periksa = () => {
        navigate('/predict');
      };
  return (
    <nav className="navbar">
      <div className="logo" onClick={home}>Cegah Stunting</div>
      <ul className="nav-links">
        <li>
          <a onClick={home}>Home</a>
        </li>
        <li>
          <a onClick={periksa}>Periksa</a>
        </li>
        <li>
          <a onClick={cegah}>Mencegah</a>
        </li>
        <li>
          <a onClick={atasi}>Mengatasi</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
