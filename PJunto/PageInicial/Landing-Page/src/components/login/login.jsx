import React, { useState } from 'react';
import './login.css';

const LoginDialog = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação.
    // Por enquanto, apenas exibiremos os valores de email e senha no console.
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className={`login-dialog ${isOpen ? 'open' : ''}`}>
      <div className="login-dialog-content">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="button"  className='button-entrar' onClick={handleLogin}>
            Entrar
          </button>
        </form>
        <button onClick={onClose} className='button-fechar'>Fechar</button>
      </div>
    </div>
  );
};

export default LoginDialog;
