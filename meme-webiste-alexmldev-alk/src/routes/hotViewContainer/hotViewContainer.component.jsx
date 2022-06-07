import { useContext } from "react";
import { HotViewBodyContainer } from "./hotViewContainer.styles";
import MemeCard from "../../components/MemeCard/MemeCard.component";
import { UserContext } from "../../contexts/user.context";

const HotViewContainer = () => {
  const { updateMemeStatus, hotList } = useContext(UserContext);

  return (
    <HotViewBodyContainer>
      {hotList.map((meme) => (
        <MemeCard
          key={meme.memeID}
          meme={meme}
          updateMemeStatus={updateMemeStatus}
        />
      ))}
    </HotViewBodyContainer>
  );
};

export default HotViewContainer;
