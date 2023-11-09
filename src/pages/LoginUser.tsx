import React, { useState } from 'react';
import { LoginUsuarioDto } from '../interfaces/loginUsuarioDtos';
import {
  Button,
  InputGroup,
  LoginCard,
  LoginDivFather,
  Card,
  LoginForm,
  Welcome
} from '../components/StyledComponents/CreateAndUserStyled';
import { fazerLogin } from '../services/LoginUserService';

function LoginUserPage() {
  const [usuario, setUsuario] = useState<LoginUsuarioDto>({
    username: '',
    senha: ''
  });
  const [response, setResponse] = useState({ code: 0, message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await fazerLogin(usuario);
      setResponse(result);
      window.location.href = '/';
    } catch (error: any) {
      console.error(error);
      setResponse({ code: 500, message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginDivFather>
      <LoginCard>
        <Welcome>
          <h1>Growtwitter</h1>
          <p>Trabalho final do bloco intermediário</p>
          <h4>
            O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma
            experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte desta comunidade
            que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.
          </h4>
        </Welcome>

        <LoginForm>
          <Card>
            <h2>Entrar no Growtwitter</h2>
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <label>Username</label>
                <input
                  type="text"
                  value={usuario.username}
                  onChange={e => setUsuario({ ...usuario, username: e.target.value })}
                />
              </InputGroup>
              <InputGroup>
                <label>Senha:</label>
                <input
                  type="password"
                  value={usuario.senha}
                  onChange={e => setUsuario({ ...usuario, senha: e.target.value })}
                />
              </InputGroup>
              <Button type="submit">Entrar</Button>
              {isLoading && <h2>Loading...</h2>}
              {response.message && (
                <div
                  style={{
                    color: 'red',
                    fontSize: '30px'
                  }}
                >
                  Ops...
                  <br />
                  <br />
                  {response.message}
                </div>
              )}
              <p>Não Possui conta?</p>
              <a href="/create">Criar conta</a>
            </form>
          </Card>
        </LoginForm>
      </LoginCard>
    </LoginDivFather>
  );
}

export default LoginUserPage;
