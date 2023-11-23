"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './Login.scss';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Simula uma chamada de API para autenticação
      const response = await fetch(`http://localhost:8080/demo/webapi/usuarios/${cpf}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Corrigindo para atribuir a resposta a uma variável chamada 'user'
      const user = await response.json();
  
      // Verifica se há um usuário com o CPF fornecido
      if (user && user.senha === senha) {
        // Salva informações na sessionStorage
        sessionStorage.setItem('usuario', JSON.stringify(user));
  
        // Redireciona para a página principal
        router.push('/');
      } else {
        // Mostra mensagem de erro na tela
        setError('CPF ou senha inválidos');
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
          CPF:
          <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
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
