import styled from 'styled-components';

const LoginDivFather = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundSecondary};
`;

const LoginCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  min-height: 300px;
  border-radius: 8px;
  align-items: stretch;
`;

const Welcome = styled.div`
  padding: 12px 24px;
  width: 50%;
  background-color: rgb(29, 155, 240);
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 18px 0 0 18px;
  justify-content: center;

  > h1 {
    color: white;
    margin-bottom: 22px !important;
  }
  > p {
    color: white;
    font-size: 12px;
  }
  > h4 {
    font-weight: 500;
    margin-top: 22px !important;
    color: white;
    font-family: Karla, Roboto, sans-serif;
    font-size: 16px;
  }
`;

const LoginForm = styled.div`
  padding: 8px;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 18px 18px 0;
  background-color: var(--background);
`;

const Card = styled.div`
  padding: 24px 16px;
  min-width: 70%;
  background-color: var(--background);
  border-radius: 12px;

  p {
    margin: 8px;
    color: var(--text);
    font-size: 12px;
  }

  h2 {
    margin-bottom: 12px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const InputGroup = styled.div`
  width: 100%;
  position: relative;

  label,
  input {
    display: block;
  }

  label {
    color: #888;
    font-size: 14px;
    margin-bottom: 4px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 4px;
    margin-bottom: 8px;
    outline: none;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
`;

const Button = styled.button`
  margin-top: 8px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: rgb(29, 155, 240);
  color: var(--background);
  padding: 8px 4px;
`;

export { Card, Button, InputGroup, LoginForm, LoginCard, Welcome, LoginDivFather };
