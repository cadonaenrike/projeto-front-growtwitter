import { API } from '../data/UrlBase';
import { CriaUsuarioDto } from '../interfaces/CriaUsuarioDto';

export async function criarUsuario(usuario: CriaUsuarioDto) {
  try {
    const result = await API.post(`/usuario`, usuario);
    return result.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao criar o usuário.');
  }
}
