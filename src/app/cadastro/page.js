"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import './Cadastro.scss';

const Cadastro = () => {
  const [formValues, setFormValues] = useState({
    nome_paciente: '',
    data_nascimento: '',
    genero: '',
    cpf: '',
    contato: '',
    senha: '',
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const router = useRouter();

  const handleCadastro = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página

    try {
      // Simula uma chamada de API para cadastro
      const response = await fetch('http://localhost:8080/demo/webapi/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
  
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const newUser = await response.json();
          
          // Atualiza as informações na sessionStorage
        sessionStorage.setItem('usuario', JSON.stringify(newUser));
        }
  
        // Redireciona para a página principal
        router.push('/login');
      } else {
        const errorData = await response.json();
        console.error('Erro ao cadastrar:', errorData.error);
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <main className='cadastro'>

      <br/>
      <h1>Realize seu cadastro!</h1>
      <br/>
      <form onSubmit={handleCadastro}>
        <label>
          Nome Completo:
          <input type="text" name="nome_paciente" value={formValues.nome_paciente} onChange={handleChange} />
        </label>
        <label>
          Data de Nascimento:
          <input type="date" name="data_nascimento" value={formValues.data_nascimento} onChange={handleChange} />
        </label>
        <label>
          Gênero:
          <input type="text" name="genero" value={formValues.genero} onChange={handleChange} />
        </label>
        <label>
          CPF:
          <input type="text" name="cpf" placeholder='apenas os números' value={formValues.cpf} onChange={handleChange} />
        </label>
        <label>
          Contato:
          <input type="text" name="contato" value={formValues.contato} onChange={handleChange} />
        </label>
        <label>
          Senha:
          <input type="password" name="senha" value={formValues.senha} onChange={handleChange} />
        </label>
        <center><button type="submit">Cadastrar</button></center>
      </form>
      <br />
      <p>
        Já tem uma conta?{' '}
        <a href="/login">Faça login aqui</a>
      </p>
      <br />
      <br />
    </main>
  );
};

export default Cadastro;
