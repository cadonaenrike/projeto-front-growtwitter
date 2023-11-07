import React from 'react';
import CardTwittes from '../components/CardsTwittes';
import DefaultLayout from '../config/layout/DefaultLayot';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const userId = localStorage.getItem('usuarioId');
  const session = sessionStorage.getItem('token');
  const navigate = useNavigate();
  if (userId != null && session != null) {
    return (
      <DefaultLayout>
        <h1 className="H1HeadersBase">Página Inicial</h1>
        <CardTwittes userId={null} />
      </DefaultLayout>
    );
  } else {
    navigate('/login');
  }
};

export default Home;
