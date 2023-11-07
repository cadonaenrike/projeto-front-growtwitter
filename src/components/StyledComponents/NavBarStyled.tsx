import styled from 'styled-components';

const NavBarStyled = styled.nav`
  width: 100%;
  max-width: 162px;
  padding-top: 16px;
  padding-right: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  link {
    padding-left: 8px;
    margin-top: 8px;
    display: flex;
    align-items: center;
  }
  img {
    padding-left: 8px;
    margin-top: 8px;
    padding-right: 8px;
  }
`;
const Logo = styled.div`
  margin-top: 8px;
  img {
    margin-bottom: 8px;
  }
`;
export { NavBarStyled, Logo };
