import { useState, useEffect } from 'react';
import { getTweetsByUserId } from '../services/GetTweetsService';
import { getProfileByUserId } from '../services/GetProfileService';
import { TweetDTO, UserDTO } from '../interfaces/UsuarioDto';

import { CardFather, FatherButtonsCards, FatherInfosCards, ImgCardTwettes } from './StyledComponents/CardTwittesStyled';
import RetweetList from './RetweetCard';

interface CardTweetsProps {
  userId: string | null;
}

const CardTwittes = ({ userId }: CardTweetsProps) => {
  const [tweets, setTweets] = useState<TweetDTO[]>([]);
  const [usuarios, setUsuarios] = useState<UserDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const Dia = new Date().getHours();

  const fetchTweets = async () => {
    try {
      const tweetsRetornados = await getTweetsByUserId(userId!);
      const tweetDtos = tweetsRetornados.map(tweetData => ({
        id_tweet: tweetData.id_tweet,
        id_usuario: tweetData.id_usuario,
        conteudo: tweetData.conteudo,
        Like: tweetData.Like,
        Retweet: tweetData.Retweet
      }));
      const usuariosPromises = tweetsRetornados.map(tweetData => getProfileByUserId(tweetData.id_usuario));
      const usuariosRetornados = await Promise.all(usuariosPromises);

      setTweets(tweetDtos);
      setUsuarios(usuariosRetornados);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, [userId]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        tweets.map(tweet => {
          const usuarioCorrespondente = usuarios.find(usuario => usuario.id_usuario === tweet.id_usuario);

          return (
            <CardFather key={tweet.id_tweet}>
              <ImgCardTwettes src={`https://www.gravatar.com/avatar/${tweet.id_usuario}?d=robohash`} alt="" />
              <FatherInfosCards>
                <span>
                  <b>{usuarioCorrespondente?.nome}</b>
                </span>
                <span>
                  @{usuarioCorrespondente?.username} • {`${Dia} hrs`}
                </span>
                <p>{tweet.conteudo}</p>
                <FatherButtonsCards>
                  <RetweetList tweet={tweet} />
                </FatherButtonsCards>
              </FatherInfosCards>
            </CardFather>
          );
        })
      )}
    </div>
  );
};

export default CardTwittes;
