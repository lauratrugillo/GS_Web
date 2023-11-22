"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import './Cadastro.scss'

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleCadastro = async () => {
    try {
      // Simula uma chamada de API para cadastro
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const newUser = await response.json();

      // Salva informações na sessionStorage
      sessionStorage.setItem('usuario', JSON.stringify(newUser));

      // Redireciona para a página principal
      router.push('/');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <main className='cadastro'>
      <h1>Realize seu cadastro!</h1>
      <br />
      <label>
        Usuário:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCadastro}>Cadastrar</button>
    </main>
  );
};

export default Cadastro;
