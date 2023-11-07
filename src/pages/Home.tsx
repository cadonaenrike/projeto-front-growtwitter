import React from 'react';
import CardTwittes from '../components/CardsTwittes';
import DefaultLayout from '../config/layout/DefaultLayot';

const Home: React.FC = () => {
  const userId = localStorage.getItem('usuarioId');
  const session = sessionStorage.getItem('token');
  if (userId != null && session != null) {
    return (
      <DefaultLayout>
        <h1 className="H1HeadersBase">Página Inicial</h1>
        <CardTwittes userId={null} />
      </DefaultLayout>
    );
  } else {
    window.location.href = '/login';
  }
};

export default Home;
