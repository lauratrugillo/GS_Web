"use client"

import './Home.scss'

const Home = () => {
  // Obtém as informações do usuário da sessionStorage
  const usuario = JSON.parse(sessionStorage.getItem('usuario'));

  return (
    <main>
      <h1>Página Principal</h1>
      {usuario ? (
        <p>Bem-vindo, {usuario.username}!</p>
      ) : (
        <p>Faça login ou cadastro para acessar esta página.</p>
      )}
    </main>
  );
};

export default Home;
