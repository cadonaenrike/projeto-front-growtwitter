import React, { useEffect, useState } from 'react';
import CardTwittes from '../components/CardsTwittes';
import DefaultLayout from '../config/layout/DefaultLayot';
import CardProfilePage from '../components/CardProfilePage';
import { fetchUserProfile } from '../services/GetCardProfileService';
import { UserDTO } from '../interfaces/UsuarioDto';

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserDTO | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('usuarioId');
    const token = sessionStorage.getItem('token');

    if (userId != null) {
      fetchUserProfile(userId, token)
        .then(userData => {
          setUser(userData);
        })
        .catch(error => {
          console.error('Erro ao buscar dados do usuário:', error);
        });
    }
  }, []);

  if (!user) {
    return null;
  }

  return (
    <DefaultLayout>
      <h1 className="H1HeadersBase">Perfil de @{user.nome}</h1>
      <CardProfilePage />
      <CardTwittes userId={user.id_usuario} />
    </DefaultLayout>
  );
};

export default Profile;
