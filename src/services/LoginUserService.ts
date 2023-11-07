import { API } from '../data/UrlBase';
import { LoginUsuarioDto } from '../interfaces/loginUsuarioDtos';

export async function fazerLogin(usuario: LoginUsuarioDto) {
  try {
    const result = await API.post(`/auth/login`, usuario);
    sessionStorage.setItem('token', result.data.data.token);
    localStorage.setItem('usuarioId', result.data.data.usuario);
    return result.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao fazer o login de usuário.');
  }
}
