"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './Usuario.scss';

const Usuario = () => {
  const usuario = JSON.parse(sessionStorage.getItem('usuario'));
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const router = useRouter();

  const handleExcluirConta = async () => {
    try {
      // Implemente a lógica para excluir a conta na API
      const response = await fetch(`http://localhost:8080/demo/webapi/usuarios/${usuario.cpf}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Se a exclusão for bem-sucedida, redirecione para a página de login
        sessionStorage.removeItem('usuario');
        router.push('/login');
      } else {
        // Se houver erro na API, exiba uma mensagem de erro
        console.error('Erro ao excluir conta:', await response.json());
      }
    } catch (error) {
      console.error('Erro ao excluir conta:', error);
    }
  };

  const handleSair = () => {
    // Limpa o sessionStorage e redireciona para a página de login
    sessionStorage.removeItem('usuario');
    router.push('/login');
  };

  return (
    <main className="usuario">
      {usuario ? (
        <div>
          <h1>Configurações do Usuário</h1>
          <label>Nome Completo: {usuario.nome_paciente}</label>
          <label>Data de Nascimento: {usuario.data_nascimento}</label>
          <label>Gênero: {usuario.genero}</label>
          <label>CPF: {usuario.cpf}</label>
          <label>Contato: {usuario.contato}</label>
          <br />
          <button onClick={handleExcluirConta}>Excluir Conta</button>
          <br/>
          <br/>
          <button onClick={handleSair}>Sair</button>
        </div>
      ) : (
        <h2>
          Faça <a href="/login">login</a> ou <a href="/cadastro">cadastro</a> para acessar esta página.
        </h2>
      )}
    </main>
  );
};

export default Usuario;
