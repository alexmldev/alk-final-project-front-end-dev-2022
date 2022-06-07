import { useContext } from "react";
import { LatestViewBodyContainer } from "./latestViewContainer.styles";
import MemeCard from "../../components/MemeCard/MemeCard.component";
import { UserContext } from "../../contexts/user.context";

const LatestViewContainer = () => {
  const { updateMemeStatus, memeList } = useContext(UserContext);

  return (
    <LatestViewBodyContainer>
      {memeList.map((meme) => (
        <MemeCard key={meme.memeID} meme={meme} updateMemeStatus={updateMemeStatus} />
      ))}
    </LatestViewBodyContainer>
  );
};

export default LatestViewContainer;
