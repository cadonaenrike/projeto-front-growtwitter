import React, { useEffect, useState } from 'react';
import { createRetweet, listRetweetsPorIdTwitter } from '../services/RetweetService';
import { RetweetDTO } from '../interfaces/RetweetDtos';
import Modal from 'react-modal';
import { TweetDTO } from '../interfaces/UsuarioDto';
import {
  FatherButtonLikesCards,
  FatherButtonRetweetCards,
  FatherButtonsCards,
  FatherInfosCards,
  ImgCardTwettes
} from './StyledComponents/CardTwittesStyled';
import LikeButton from './LikeButton';
import { CardRetweetFather, FatherCardRetweet } from './StyledComponents/CardRetweetFather';

interface RetweetListProps {
  tweet: TweetDTO;
}

const RetweetList: React.FC<RetweetListProps> = ({ tweet }) => {
  const [retweets, setRetweets] = useState<RetweetDTO[]>([]);
  const [conteudoRetweet, setConteudoRetweet] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadRetweets();
  }, [tweet.id_tweet]);

  const loadRetweets = async () => {
    try {
      const response = await listRetweetsPorIdTwitter(tweet.id_tweet);
      setRetweets(response.data.data.data);
    } catch (error) {
      console.error('Erro ao carregar retweets:', error);
    }
  };

  const handleCreateRetweet = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTweet = async (e: React.FormEvent) => {
    e.preventDefault();

    const newRetweet: RetweetDTO = {
      id_tweet: tweet.id_tweet,
      conteudo: conteudoRetweet
    };
    const createRetweetResponse = await createRetweet(newRetweet);

    if (createRetweetResponse.ok) {
      setConteudoRetweet('');
      setIsModalOpen(false);
      loadRetweets();
    } else {
      console.error('Erro ao criar retweet:', createRetweetResponse.message);
    }
  };

  return (
    <div>
      <FatherButtonsCards>
        <FatherButtonRetweetCards>
          <img src="./src/public/light_color/icone_responder.svg" alt="Criar Retweet" onClick={handleCreateRetweet} />
        </FatherButtonRetweetCards>
        <FatherButtonLikesCards>
          <LikeButton tweet={tweet} />
        </FatherButtonLikesCards>
      </FatherButtonsCards>
      <FatherCardRetweet hasRetweets={retweets.length > 0}>
        {retweets.map((retweet, index) => (
          <CardRetweetFather key={index}>
            <ImgCardTwettes src={`https://www.gravatar.com/avatar/${retweet.id_usuario}?d=robohash`} alt="" />
            <FatherInfosCards>
              <span>
                <b>{retweet.Usuario!.nome}</b>
              </span>
              <span>@{retweet.Usuario!.username}</span>
              <p>{retweet.conteudo}</p>
              <FatherButtonsCards></FatherButtonsCards>
            </FatherInfosCards>
          </CardRetweetFather>
        ))}
      </FatherCardRetweet>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Criar Retweet" className="modalPai">
        <div className="modalReTwitter">
          <div className="card">
            <div className="close-icon" onClick={closeModal}>
              <img src="./src/public/light_color/X.svg" alt="Close" />
            </div>
            <form onSubmit={handleTweet}>
              <div className="divForm">
                <textarea
                  name="content"
                  id="content"
                  cols={30}
                  rows={10}
                  placeholder="O que está acontecendo?"
                  value={conteudoRetweet}
                  onChange={e => setConteudoRetweet(e.target.value)}
                ></textarea>
                <button type="submit">Retweetar</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RetweetList;
