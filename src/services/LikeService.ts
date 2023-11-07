import { API } from '../data/UrlBase';

export async function CreateLike(idUsuario: string, idTweet: string) {
  try {
    const response = await API.post(`/like`, {
      id_usuario: idUsuario,
      id_tweet: idTweet
    });
    return {
      ok: true,
      message: 'Like criado com sucesso!',
      data: response.data
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.response.data.message || error.message
    };
  }
}
export async function DeletLike(idUsuario: string, idTweet: string) {
  try {
    const response = await API.delete(`/like/${idUsuario}/${idTweet}`);
    return {
      ok: true,
      message: 'Like Deletado com sucesso!',
      data: response.data
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.response.data.message || error.message
    };
  }
}
