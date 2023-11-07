import axios from 'axios';
import ButtonLogout from './StyledComponents/LogoutButtonStyled';
import API_BASE_URL from '../data/UrlBase';

const LogoutButton = () => {
  const handleLogout = async () => {
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
    }
  };

  return <ButtonLogout onClick={handleLogout}>Sair</ButtonLogout>;
};

export default LogoutButton;
