export interface NavigationType {
  url: string;
  label: string;
  img: string;
}

const navigation: NavigationType[] = [
  { url: '/', img: './src/public/light_color/icone_pagina inicial', label: 'Pagina Inicial' },
  { url: '/Explorar', img: './src/public/light_color/icone_explorar', label: 'Explorar' },
  { url: '/Perfil', img: './src/public/light_color/icone_perfil', label: 'Perfil' }
];

export default navigation;
