import styled from 'styled-components';

const CardProfileFhater = styled.div`
  position: absolute;
  bottom: 48px;
  display: flex;
  flex-direction: row;

  img {
    margin-right: 8px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;
const CardProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
  }
  p {
    color: rgb(130, 130, 130);
    font-size: 12px;
  }
`;
export { CardProfileFhater, CardProfileInfos };
