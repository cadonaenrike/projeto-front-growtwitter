import { useState, useEffect } from 'react';
import { CardProfileFhater, CardProfileInfos } from './StyledComponents/CardProfileStyled';
import { UserDTO } from '../interfaces/UsuarioDto';
import { fetchUserProfile } from '../services/GetCardProfileService';

const CardProfile = () => {
  const userId = localStorage.getItem('usuarioId');
  const authToken = sessionStorage.getItem('token');
  const [response, setResponse] = useState<{ code: number; message: string }>({ code: 0, message: '' });
  const [filteredProfile, setFilteredProfile] = useState<UserDTO | null>(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const perfilEncontrado = await fetchUserProfile(userId, authToken);

        if (perfilEncontrado) {
          setFilteredProfile(perfilEncontrado);
        }
      } catch (error: any) {
        console.error(error);
        setResponse({ code: error.response?.status || 0, message: error.message });
      }
    };

    getProfile();
  }, [userId, authToken]);

  if (filteredProfile) {
    return (
      <CardProfileFhater>
        <img src={`https://www.gravatar.com/avatar/${userId}?d=robohash`} alt="" />
        <CardProfileInfos>
          <h1>{filteredProfile.nome}</h1>
          <p>@{filteredProfile.username}</p>
        </CardProfileInfos>
      </CardProfileFhater>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
        <p>{response.message}</p>
      </div>
    );
  }
};

export default CardProfile;
