import { UserDTO } from './UsuarioDto';

export interface RetweetDTO {
  id_Retweet?: string;
  id_tweet: string;
  id_usuario?: string | null;
  conteudo?: string;
  Usuario?: UserDTO;
}
