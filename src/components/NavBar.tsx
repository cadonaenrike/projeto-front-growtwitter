import React from 'react';
import { NavigationType } from '../config/navigation';
import { NavBarStyled, Logo } from './StyledComponents/NavBarStyled';
import { Link, useLocation } from 'react-router-dom';
import TweetModal from './Twettar';
import CardProfile from './CardProfile';
import LogoutButton from './Logout';
import ligthImg from '../public/light_color/logo_growtweet.svg';
import DarkImg from '../public/dark_color/LOGO_GROWTWEET.svg';

const lightLogoUrl = ligthImg;
const darkLogoUrl = DarkImg;

interface NavbarProps {
  navigation: NavigationType[];
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  const location = useLocation();
  const isDarkTheme = sessionStorage.getItem('isDarkTheme');
  const logoUrl = isDarkTheme === 'true' ? darkLogoUrl : lightLogoUrl;

  return (
    <>
      <NavBarStyled>
        <Logo>
          <img src={logoUrl} alt="" />
        </Logo>
        {navigation.map(item => (
          <Link to={item.url} key={item.url}>
            <img src={location.pathname === item.url ? `${item.img}_selecionado.svg` : `${item.img}.svg`} />
            <span>{item.label}</span>
          </Link>
        ))}
        <TweetModal />
        <CardProfile />
        <LogoutButton />
      </NavBarStyled>
    </>
  );
};

export default Navbar;
