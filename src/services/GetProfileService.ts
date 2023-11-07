import { API } from '../data/UrlBase';
import { UserDTO } from '../interfaces/UsuarioDto';

export const getProfileByUserId = async (userId: string) => {
  const authToken = sessionStorage.getItem('token');

  try {
    const response = await API.get(`/usuario/getId`, {
      headers: {
        token: authToken,
        id_usuario: userId
      }
    });
    console.log(response);
    const perfilEncontrado: UserDTO = response.data.data;
    return perfilEncontrado;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
