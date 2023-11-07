import { API } from '../data/UrlBase';
import { UserDTO } from '../interfaces/UsuarioDto';

export async function fetchUserProfile(userId: string | null, authToken: string | null) {
  try {
    const response = await API.get(`/usuario`, {
      headers: {
        token: authToken
      }
    });

    const perfilEncontrado = response.data.data.find((perfil: UserDTO) => perfil.id_usuario === userId);

    return perfilEncontrado;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.status || error.message);
  }
}
