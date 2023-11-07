import { API } from '../data/UrlBase';
import { RetweetDTO } from '../interfaces/RetweetDtos';

export async function createRetweet(data: RetweetDTO) {
  try {
    const response = await API.post(`/retweet`, data);
    return {
      ok: true,
      message: 'Retweet criado com sucesso!',
      data: response.data
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.response?.data.message || error.message
    };
  }
}

export async function listRetweets() {
  try {
    const response = await API.get(`/retweet`);
    return {
      ok: true,
      message: 'Retweets listados com sucesso!',
      data: response.data
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.response?.data.message || error.message
    };
  }
}

export async function listRetweetsPorIdTwitter(twitter: string) {
  try {
    const response = await API.get(`/retweet/${twitter}`);

    return {
      ok: true,
      message: 'Retweets listados com sucesso!',
      data: response.data
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.response?.data.message || error.message
    };
  }
}
