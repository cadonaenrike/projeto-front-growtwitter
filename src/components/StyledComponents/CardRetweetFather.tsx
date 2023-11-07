import styled from 'styled-components';

export const CardRetweetFather = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding: 12px;
  font-size: 0.8rem;
`;
export const FatherCardRetweet = styled.div<{ hasRetweets: boolean }>`
  overflow-x: auto;
  max-height: 60vh;
  width: 150%;
  margin-top: 25px;
  padding: 25px;
  border: ${props => (props.hasRetweets ? '1px solid rgb(224, 224, 224)' : 'none')};
`;
