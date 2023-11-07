import React, { useState } from 'react';
import { CriaUsuarioDto } from '../interfaces/CriaUsuarioDto';
import {
  Button,
  Card,
  InputGroup,
  LoginCard,
  LoginDivFather,
  LoginForm,
  Welcome
} from '../components/StyledComponents/CreateAndUserStyled';
import { useNavigate } from 'react-router-dom';
import { criarUsuario } from '../services/CreatUserService';

function CreateUserPage() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<CriaUsuarioDto>({
    nome: '',
    email: '',
    username: '',
    senha: ''
  });
  const [response, setResponse] = useState({ code: 0, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await criarUsuario(usuario);

      setResponse(result);

      navigate('/login');
    } catch (error: any) {
      console.error(error);
      setResponse({ code: 500, message: error.message });
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
            <h2>Criar Conta no Growtwitter</h2>
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <label>Nome:</label>
                <input
                  type="text"
                  value={usuario.nome}
                  onChange={e => setUsuario({ ...usuario, nome: e.target.value })}
                />
              </InputGroup>
              <InputGroup>
                <label>Email:</label>
                <input
                  type="text"
                  value={usuario.email}
                  onChange={e => setUsuario({ ...usuario, email: e.target.value })}
                />
              </InputGroup>
              <InputGroup>
                <label>Username:</label>
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
              <Button type="submit">Criar Usuário</Button>
            </form>
          </Card>
        </LoginForm>
      </LoginCard>

      {response.message && (
        <div
          style={{
            position: 'absolute',
            textAlign: 'center',
            top: '150px',
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
    </LoginDivFather>
  );
}

export default CreateUserPage;
