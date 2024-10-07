import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.css';

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="app-container">
        <div className={`menu-icon-container ${isOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon">☰ {/* Ícone de hambúrguer */}</div>
        </div>
        {isOpen && (
          <div className="side-menu open">
            <nav className="menu">
              <ul>
                <li>
                  <Link to="/">Início</Link>
                </li>
                <li>
                  <Link to="/historia-preta">História Preta de Londrina</Link>
                </li>
                <li>
                  <Link to="/memorias-pretas">Memórias Pretas</Link>
                </li>
                <li>
                  <Link to="/artistas-pretos">Artistas Pretos</Link>
                </li>
                <li>
                  <Link to="/artigos-pretos">Artigos Pretos</Link>
                </li>
                <li>
                  <Link to="/instituicoes-pretas">Instituições Pretas</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  };
  
  export default SideMenu;