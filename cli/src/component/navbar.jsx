import React from 'react';
import "../style/navbar.css"
import { useNavigate } from 'react-router-dom';
import Container from './container';
const Navbar = () => {
    const navigate = useNavigate();

    const home = () => {
      navigate('/');
    };
    const cegah = () => {
        navigate('/pencegahan');
      };
    const periksa = () => {
        navigate('/predict');
      };
  return (
    <Container>
        <nav className="navbar">
      <div style={{cursor: "pointer",}} className="logo" onClick={home}>Cegah Stunting</div>
      <ul className="nav-links">
        <li>
          <a style={{cursor: "pointer",}} onClick={home}>Home</a>
        </li>
        <li>
          <a style={{cursor: "pointer",}} onClick={periksa}>Periksa</a>
        </li>
        <li>
          <a onClick={cegah} style={{cursor: "pointer",}}>Mencegah dan mengatasi</a>
        </li>
      </ul>
    </nav>
    </Container>
  );
};

export default Navbar;
