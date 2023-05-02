import React, { useState } from 'react';
import userManager from '../config/auth';

function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    setIsLoading(true);
    try {
      await userManager.signinRedirect();
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }

  return (
    <a onClick={handleLogin} disabled={isLoading} className='links' style={{cursor:'pointer'}}>
      {isLoading ? 'Cargando...' : 'Iniciar sesión'}
    </a>
  );
}

export default LoginButton;
