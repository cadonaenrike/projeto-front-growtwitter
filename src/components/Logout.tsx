import { useState } from 'react';
import axios from 'axios';
import ButtonLogout from './StyledComponents/LogoutButtonStyled';
import API_BASE_URL from '../data/UrlBase';

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      const authToken = sessionStorage.getItem('token');

      if (authToken) {
        await axios.get(`${API_BASE_URL}/auth/logout`, {
          headers: {
            token: authToken
          }
        });
        sessionStorage.removeItem('token');
        localStorage.removeItem('usuarioId');
        window.location.href = '/login';
      } else {
        console.error('Token não encontrado no sessionStorage.');
      }
    } catch (error) {
      console.error('Erro ao efetuar o logout:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return <ButtonLogout onClick={handleLogout}>{isLoading ? 'Saindo...' : 'Sair'}</ButtonLogout>;
};

export default LogoutButton;
