import {
  Card,
  CardControlIcon,
  CardControlIconHotspot,
  CardControlPanel,
  CardImageContainer,
} from "./MemeCard.styles";
import { useState } from "react";
import {
  faHeart,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
  faThumbsUp as fasThumbsUp,
  faThumbsDown as fasThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

const MemeCard = ({ meme, updateMemeStatus }) => {
  const [styledDownVote, setStyledDownVote] = useState(false);
  const [styledHeart, setStyledHeart] = useState(false);
  const [styledUpVote, setStyledUpVote] = useState(false);

  const handleUpVote = (meme) => {
    updateMemeStatus("upVoteMeme", meme);
    setStyledUpVote(true);
    setTimeout(() => {
      setStyledUpVote(false);
    }, 200);
  };

  const handleDownVote = (meme) => {
    updateMemeStatus("downVoteMeme", meme);
    setStyledDownVote(true);
    setTimeout(() => {
      setStyledDownVote(false);
    }, 200);
  };

  const handleHeart = (meme) => {
    updateMemeStatus("heartMeme", meme);
    if (meme.hearted) {
      setStyledHeart(false);
    } else {
      setStyledHeart(true);
    }
  };

  return (
    <Card>
      <CardImageContainer>
        <img
          src={require(`../../assets/images/meme-${meme.memeID}.png`)}
          alt="meme"
        />
      </CardImageContainer>
      <CardControlPanel>
        <span className="count">{meme.downVotes < 0 && meme.downVotes}</span>
        <CardControlIconHotspot onClick={() => handleDownVote(meme)}>
          <CardControlIcon
            icon={styledDownVote ? fasThumbsDown : faThumbsDown}
          />
        </CardControlIconHotspot>
        <CardControlIconHotspot onClick={() => handleHeart(meme)}>
          <CardControlIcon icon={styledHeart || meme.hearted ? fasHeart : faHeart} />
        </CardControlIconHotspot>
        <CardControlIconHotspot onClick={() => handleUpVote(meme)}>
          <CardControlIcon icon={styledUpVote ? fasThumbsUp : faThumbsUp} />
        </CardControlIconHotspot>
        <span className="count">{meme.upVotes > 0 && meme.upVotes}</span>
      </CardControlPanel>
    </Card>
  );
};

export default MemeCard;
