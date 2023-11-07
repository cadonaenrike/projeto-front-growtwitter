import React from 'react';
import CardTwittes from '../components/CardsTwittes';
import DefaultLayout from '../config/layout/DefaultLayot';
import { redirect } from 'react-router-dom';

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
    redirect('/login');
  }
};

export default Home;
