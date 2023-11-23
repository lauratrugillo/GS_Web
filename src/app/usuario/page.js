"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import './Usuario.scss'

const Usuario = () => {

    const usuario = JSON.parse(sessionStorage.getItem('usuario'));

    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const router = useRouter();

  const handleChangeSenha = async () => {
    // Implemente a lógica para alterar a senha na API
    // Utilize o endpoint apropriado e envie os dados necessários
    // Exemplo: /demo/webapi/usuarios/{id}/alterar-senha

    // Após a alteração de senha, redirecione para a página principal
    router.push('/');
  };

  const handleExcluirConta = async () => {
    // Implemente a lógica para excluir a conta na API
    // Utilize o endpoint apropriado e envie os dados necessários
    // Exemplo: /demo/webapi/usuarios/{id}

    // Após a exclusão da conta, redirecione para a página de login
    router.push('/login');
  };

  return (
      <main className='usuario'>
        <h1>Configurações do Usuário</h1>
        <label>Nome Completo: {usuario.nome_paciente}</label>
        <label>Data de Nascimento: {usuario.data_nascimento}</label>
        <label>Genero: {usuario.genero}</label>
        <label>CPF: {usuario.cpf}</label>
        <label>Contato: {usuario.contato}</label>

        <label>
          Senha Atual:
          <input
            type="password"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
          />
        </label>
        <br />
        <label>
          Nova Senha:
          <input
            type="password"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleChangeSenha}>Alterar Senha</button>
        <br />
        <button onClick={handleExcluirConta}>Excluir Conta</button>
      </main>
  );
};

export default Usuario;