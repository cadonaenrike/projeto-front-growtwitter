import { useState, useEffect } from 'react';
import { UserDTO } from '../interfaces/UsuarioDto';
import { fetchUserProfile } from '../services/GetCardProfileService';
import { InfosProfilePage, ProfilePage } from './StyledComponents/ProfilePageStyled';

const CardProfilePage = () => {
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
      <>
        <ProfilePage>
          <img src={`https://www.gravatar.com/avatar/${userId}?d=robohash`} alt="" />
        </ProfilePage>
        <InfosProfilePage>
          <h1>{filteredProfile.nome}</h1>
          <p>@{filteredProfile.username}</p>
        </InfosProfilePage>
      </>
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

export default CardProfilePage;
