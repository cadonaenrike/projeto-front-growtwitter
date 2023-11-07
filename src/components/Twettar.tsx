import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Button } from './StyledComponents/CreateAndUserStyled';
import API_BASE_URL from '../data/UrlBase';

const TweetModal = ({ userId = localStorage.getItem('usuarioId'), authToken = sessionStorage.getItem('token') }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tweetContent, setTweetContent] = useState('');
  const [response, setResponse] = useState({ code: 0, message: '' });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTweetContent('');
  };

  const handleTweet = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(userId, authToken);
      const response = await axios.post(
        `${API_BASE_URL}/twitter`,
        {
          id_usuario: userId,
          conteudo: tweetContent
        },
        {
          headers: {
            token: authToken
          }
        }
      );

      if (response.data.ok) {
        alert('Tweet criado com sucesso!');
        window.location.href = '/';
        closeModal();
      } else {
      }
    } catch (error) {
      console.error(error);
      setResponse({ code: response.code, message: response.message });
    }
  };

  return (
    <div>
      <Button
        id="CreateTweet"
        style={{ maxWidth: '162px', borderRadius: '16px', marginTop: '12px' }}
        onClick={openModal}
      >
        Tweetar
      </Button>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Criar Tweet" className="modalPai">
        <div className="modalTwitter">
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
                  value={tweetContent}
                  onChange={e => setTweetContent(e.target.value)}
                ></textarea>
                <Button style={{ maxWidth: '70px', alignSelf: 'end' }} type="submit">
                  Tweetar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TweetModal;
