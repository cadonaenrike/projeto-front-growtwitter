export interface CardTwittesProps {
  userId: string | null;
  authToken: string | null;
  reloadFlag: boolean;
  onReload: () => void;
}
export interface TweetModalProps {
  userId: string | null;
  authToken: string | null;
  onTweetCreated: () => void;
}
