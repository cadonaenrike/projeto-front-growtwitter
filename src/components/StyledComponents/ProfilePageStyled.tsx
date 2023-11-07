import styled from 'styled-components';

const ProfilePage = styled.div`
  height: 132px;
  width: 100%;
  background-color: var(--background);
  position: relative;
  overflow: visible;
  margin-bottom: 48px;
  img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 6px solid var(--text);
    position: absolute;
    bottom: -45px;
    left: 12px;
  }
`;

const InfosProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  margin-top: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgb(224, 224, 224);
`;
export { ProfilePage, InfosProfilePage };
