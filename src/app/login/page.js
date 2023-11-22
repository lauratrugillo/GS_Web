"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Simula uma chamada de API para autenticação
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();

      // Verifica se há um usuário com o nome fornecido
      const authenticatedUser = users.find(user => user.username === username);

      if (authenticatedUser) {
        // Salva informações na sessionStorage
        sessionStorage.setItem('usuario', JSON.stringify(authenticatedUser));

        // Redireciona para a página principal
        router.push('/');
      } else {
        // Mostra mensagem de erro na tela
        setError('Usuário não encontrado');
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
    }
  };

  return (
    <main className='login'>
      <h1>Página de Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
      <button onClick={handleLogin}>Entrar</button>
      <br />
      <p>
        Ainda não tem uma conta?{' '}
        <Link href="/cadastro">
          Cadastre-se aqui
        </Link>
      </p>
    </main>
  );
};

export default Login;
