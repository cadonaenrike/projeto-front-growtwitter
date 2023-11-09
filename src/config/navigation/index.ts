import explore from '../../public/light_color/icone_explorar.svg';
import exploreImgSelectes from '../../public/light_color/icone_explorar_selecionado.svg';
import initiaImg from '../../public/light_color/icone_pagina inicial.svg';
import initiaImgSelected from '../../public/light_color/icone_pagina inicial_selecionado.svg';
import profile from '../../public/light_color/icone_perfil.svg';
import profileImgSelected from '../../public/light_color/icone_perfil_selecionado.svg';
export interface NavigationType {
  url: string;
  label: string;
  img: string;
  selected: string;
}

const navigation: NavigationType[] = [
  { url: '/', img: initiaImg, selected: initiaImgSelected, label: 'Pagina Inicial' },
  { url: '/Explorar', img: explore, selected: exploreImgSelectes, label: 'Explorar' },
  { url: '/Perfil', img: profile, selected: profileImgSelected, label: 'Perfil' }
];

export default navigation;
