export interface UserDTO {
  id_usuario: string;
  nome: string;
  email: string;
  username: string;
  senha: string;
  token: string | null;
  Tweet: TweetDTO[];
  seguidores: FollowerDTO[];
  seguindo: FollowingDTO[];
}

export interface TweetDTO {
  Like?: [] | null | undefined;
  Retweet?: [];
  conteudo: string;
  id_tweet: string;
  id_usuario: string;
}

export interface FollowerDTO {
  id_usuario_segue: string;
  id_usuario_seguido: string;
  seguidores: UserDTO;
}

export interface FollowingDTO {
  id_usuario_segue: string;
  id_usuario_seguido: string;
  seguindo: UserDTO;
}
