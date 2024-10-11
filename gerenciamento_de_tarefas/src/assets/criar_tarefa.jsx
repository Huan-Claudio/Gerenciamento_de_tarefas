import React, { useState } from 'react';

const CriarTarefa = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} />
      </label>
      <br />
      <label>
        Descrição:
        <textarea value={descricao} onChange={(event) => setDescricao(event.target.value)} />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="pending">Pendente</option>
          <option value="in_progress">Em progresso</option>
          <option value="completed">Completo</option>
        </select>
      </label>
      <br />
      <button type="submit">Criar Tarefa</button>
    </form>
  );
};

export default CriarTarefa;