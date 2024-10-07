import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideMenu from '../components/SideMenu'; // Certifique-se de que o caminho esteja correto

const Home = () => {
  return (
    <div className="app-container">
      <SideMenu />
      <div>
        <h1>Museu Online da História Afro-descendente de Londrina</h1>
        <p>Bem-vindo ao nosso museu virtual!</p>
        <Routes>
          <Route path="/historia-preta" element={<div>História Preta de Londrina</div>} />
          <Route path="/memorias-pretas" element={<div>Memórias Pretas</div>} />
          <Route path="/artistas-pretos" element={<div>Artistas Pretos</div>} />
          <Route path="/artigos-pretos" element={<div>Artigos Pretos</div>} />
          <Route path="/instituicoes-pretas" element={<div>Instituições Pretas</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;