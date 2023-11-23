"use client"

import './Home.scss'

const Home = () => {
  // Obtém as informações do usuário da sessionStorage
  const usuario = JSON.parse(sessionStorage.getItem('usuario'));

  return (
    <main className='home'>
      <h1>Página Principal</h1>
      {usuario ? (
        <p>Bem-vindo, {usuario.nome_paciente}!</p>
      ) : (
        <h2>Faça <a href='/login'>login</a> ou <a href='/cadastro'>cadastro</a> para acessar esta página.</h2>
      )}
    </main>
  );
};

export default Home;
