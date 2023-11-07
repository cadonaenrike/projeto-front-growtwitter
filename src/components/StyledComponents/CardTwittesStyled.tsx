import styled from 'styled-components';

const CardFather = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding: 12px;
  font-size: 0.8rem;
`;
const ImgCardTwettes = styled.img`
  margin-right: 8px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
const FatherInfosCards = styled.div`
  flex: 1 1 0%;
  span {
    margin-right: 8px;
  }
`;
const FatherButtonsCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const FatherButtonRetweetCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 28px;
  img {
    height: 12px;
    width: 12px;
    margin-right: 4px;
  }
  span {
    font-size: 12px;
    color: rgb(130, 130, 130);
  }
`;
const FatherButtonLikesCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 28px;
  img {
    height: 12px;
    width: 12px;
    margin-right: 4px;
  }
  span {
    font-size: 12px;
    color: var(--text);
  }
`;
export {
  CardFather,
  ImgCardTwettes,
  FatherInfosCards,
  FatherButtonsCards,
  FatherButtonRetweetCards,
  FatherButtonLikesCards
};
