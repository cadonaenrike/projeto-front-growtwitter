import { useState } from 'react';
import { CreateLike, DeletLike } from '../services/LikeService';
import { TweetDTO } from '../interfaces/UsuarioDto';

interface LikeButtonProps {
  tweet: TweetDTO;
}

function LikeButton({ tweet }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState<number>(tweet.Like.length);

  const handleLikeClick = async () => {
    try {
      if (isLiked) {
        await DeletLike(tweet.id_usuario, tweet.id_tweet);
        setIsLiked(false);
        setLikesCount(likesCount - 1);
      } else {
        await CreateLike(tweet.id_usuario, tweet.id_tweet);
        setIsLiked(true);
        setLikesCount(likesCount + 1);
      }
    } catch (error) {
      console.error('Erro ao processar o like:', error);
    }
  };

  return (
    <div>
      <img
        onClick={handleLikeClick}
        src={
          isLiked
            ? 'https://growtwitter-chi.vercel.app/assets/icone_curtir_selecionado-c222b3b4.svg'
            : './public/light_color/icone_curtir.svg'
        }
        alt="curtir"
      />
      <span>{likesCount}</span>
    </div>
  );
}

export default LikeButton;
