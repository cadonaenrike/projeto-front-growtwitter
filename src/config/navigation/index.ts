import pageInitial from '../../public/light_color/icone_pagina inicial.svg';
import explore from '../../public/light_color/icone_explorar.svg';
import profile from '../../public/light_color/icone_perfil.svg';

export interface NavigationType {
  url: string;
  label: string;
  img: string;
}

const navigation: NavigationType[] = [
  { url: '/', img: pageInitial, label: 'Pagina Inicial' },
  { url: '/Explorar', img: explore, label: 'Explorar' },
  { url: '/Perfil', img: profile, label: 'Perfil' }
];

export default navigation;
