import Navbar from '../../components/NavBar';
import BodyHome from '../../components/StyledComponents/BodyHomeStyled';
import DefaultLayoutStyle from '../../components/StyledComponents/DefaultLayoutStyle';
import Footer from '../../components/StyledComponents/FooterStyled';
import Trends from '../../components/Trends';
import navigation from '../navigation';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <DefaultLayoutStyle>
      <Navbar navigation={navigation} />
      <BodyHome>{children}</BodyHome>
      <Footer>
        <section>
          <h1>O que está acontencendo?</h1>
          {Trends()}
          <div className="buttonFotter">
            <a href="/Explorar">Mostrar Mais</a>
          </div>
        </section>
      </Footer>
    </DefaultLayoutStyle>
  );
};
export default DefaultLayout;
