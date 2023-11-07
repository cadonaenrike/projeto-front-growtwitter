import React from 'react';
import DefaultLayout from '../config/layout/DefaultLayot';
import Trends from '../components/Trends';

const Explore: React.FC = () => {
  const userId = localStorage.getItem('usuarioId');
  if (userId != null) {
    return (
      <DefaultLayout>
        <h1 className="H1HeadersBase">Explorar</h1>
        <div className="BodyExplore">{Trends()}</div>
      </DefaultLayout>
    );
  } else {
    window.location.href = '/login';
  }
};

export default Explore;
