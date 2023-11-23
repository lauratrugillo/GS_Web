"use client"

import React, { useState, useEffect } from 'react';
import './Sintomas.scss'

const SintomasPage = () => {

    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    
  const [sintomas, setSintomas] = useState([]);
  const [selectedSintoma, setSelectedSintoma] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  useEffect(() => {
    // Simulando uma chamada para obter a lista de sintomas
    const listaSintomas = [
      { id: 1, descricao: 'Dor de garganta, dificuldade em engolir' },
      { id: 2, descricao: 'Dor abdominal persistente' },
      { id: 3, descricao: 'Fadiga e falta de ar' },
      { id: 4, descricao: 'Irregularidade menstrual, excesso de pelos, acne e obesidade' },
      { id: 5, descricao: 'Febre, calafrios, dores musculares, tosse, congestão, coriza, dores de cabeça e fadiga' },
      { id: 6, descricao: 'Dor pelvica, aumento da vontade de urinar, dor ao urinar e sangramento na urina' },
      { id: 7, descricao: 'Dor nos olhos e dor de cabeça' },
      { id: 8, descricao: 'Dor nas costas e cansaço' },
      { id: 9, descricao: 'Tosse seca e dor no peito' },
      { id: 10, descricao: 'Nauseas e sensibilidade a luz e ao som' },
    ];

    setSintomas(listaSintomas);
  }, []);

  const handleSintomaChange = async (event) => {
    const selectedId = event.target.value;
    setSelectedSintoma(selectedId);

    try {
      // Simula uma chamada para obter a especialidade com base no ID do sintoma selecionado
      const response = await fetch(`http://localhost:8080/demo/webapi/sintomas/${selectedId}`);
      const data = await response.json();

      if (response.ok) {
        // Atualiza o estado com a especialidade obtida
        setEspecialidade(data.especialidade);
      } else {
        // Trata erros se necessário
        console.error('Erro ao buscar a especialidade:', data.error);
      }
    } catch (error) {
      console.error('Erro ao buscar a especialidade:', error);
    }
  };

  return (
    <main className='sintomas'>
    {usuario ? (
        <div>
        <h1>Escolha um Sintoma</h1>
        <br/>
        <label>
            <select value={selectedSintoma} onChange={handleSintomaChange}>
            <option value="" disabled>
                Selecione um sintoma
            </option>
            {sintomas.map((sintoma) => (
                <option key={sintoma.id} value={sintoma.id}>
                {sintoma.descricao}
                </option>
            ))}
            </select>
        </label>

        {especialidade && (
            <div>
                <br/>
            <h2>Especialidade Indicada</h2>
            <p>{especialidade}</p>
            </div>
        )}
        </div>
    ) : (
        <h2>Faça <a href='/login'>login</a> ou <a href='/cadastro'>cadastro</a> para acessar esta página.</h2>
    )}
    </main>
  );
};

export default SintomasPage;
