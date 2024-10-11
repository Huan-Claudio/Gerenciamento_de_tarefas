import React, { useState } from 'react';
import './App.css'

const RegisterUser  = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
<div>
    <h1>Registrar Usuário</h1>
    <div className='Sim'>
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Senha:
        <input type="senha" value={senha} onChange={(event) => setSenha(event.target.value)} />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
    </div>
    </div>
  )
}

export default RegisterUser