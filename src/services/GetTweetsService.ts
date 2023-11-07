import { API } from '../data/UrlBase';
import { TweetDTO } from '../interfaces/UsuarioDto';

export const getTweetsByUserId = async (userId?: string) => {
  const authToken = sessionStorage.getItem('token');
  const userFormated = `?usuario_id=${userId}`;
  try {
    if (userId != undefined) {
      const response = await API.get(`/twitter${userFormated}`, {
        headers: {
          token: authToken
        }
      });
      const perfilEncontrado: TweetDTO[] = response.data.data;
      return perfilEncontrado;
    } else {
      const response = await API.get(`/twitter`, {
        headers: {
          token: authToken
        }
      });
      const perfilEncontrado: TweetDTO[] = response.data.data;
      return perfilEncontrado;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
