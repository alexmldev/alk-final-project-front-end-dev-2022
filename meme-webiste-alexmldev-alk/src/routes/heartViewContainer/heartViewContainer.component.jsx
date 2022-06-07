import { useContext } from "react";
import { HeartViewBodyContainer } from "./heartViewContainer.styles";
import MemeCard from "../../components/MemeCard/MemeCard.component";
import { UserContext } from "../../contexts/user.context";

const HeartViewContainer = () => {
  const { updateMemeStatus, heartList } = useContext(UserContext);

  return (
    <HeartViewBodyContainer>
      {heartList.map((meme) => (
        <MemeCard
          key={meme.memeID}
          meme={meme}
          updateMemeStatus={updateMemeStatus}
        />
      ))}
    </HeartViewBodyContainer>
  );
};

export default HeartViewContainer;
