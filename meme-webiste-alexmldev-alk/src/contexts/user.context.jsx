import { createContext, useEffect, useState } from "react";
import { MEME_SEED } from "../assets/memeSeed/MemeSeed";

export const UserContext = createContext({
  pageView: "latest",
  setPageView: () => {},
  memeList: MEME_SEED,
  setMemeList: () => {},
  heartList: [],
  setHeartList: () => {},
  hotList: [],
  setHotList: () => {},
  updateMemeStatus: () => {},
});

export const UserProvider = ({ children }) => {
  const [pageView, setpageView] = useState("latest");
  const [memeList, setMemeList] = useState([]);
  const [heartList, setHeartList] = useState([]);
  const [hotList, setHotList] = useState([]);
  const [heartListAction, setHeartListAction] = useState(false);

  const updateMemeStatus = (actionType, payload) => {
    switch (actionType) {
      case "upVoteMeme":
        return setMemeList(updateMeme("upVoteMeme", payload, memeList));
      case "downVoteMeme":
        return setMemeList(updateMeme("downVoteMeme", payload, memeList));
      case "heartMeme":
        return setMemeList(updateMeme("heartMeme", payload, memeList));
      default:
        return;
    }
  };

  useEffect(() => {
    setMemeList(MEME_SEED);
  }, []);

  const updateMeme = (actionType, payload, memeList) => {
    switch (actionType) {
      case "upVoteMeme":
        return memeList.map((meme) =>
          meme.memeID === payload.memeID
            ? { ...meme, upVotes: meme.upVotes + 1 }
            : { ...meme }
        );
      case "downVoteMeme":
        return memeList.map((meme) =>
          meme.memeID === payload.memeID
            ? { ...meme, downVotes: meme.downVotes - 1 }
            : { ...meme }
        );
      case "heartMeme":
        setHeartListAction(true);
        return memeList.map((meme) =>
          meme.memeID === payload.memeID
            ? { ...meme, hearted: !meme.hearted }
            : { ...meme }
        );
      default:
        return;
    }
  };

  useEffect(() => {
    setHeartList(memeList.filter((meme) => meme.hearted));
    setHeartListAction(false);
  }, [heartListAction, memeList]);

  useEffect(
    () =>
      setHotList(
        memeList.filter(
          (meme) =>
            meme.upVotes + meme.downVotes > 5 &&
            meme.upVotes + meme.downVotes > 0
        )
      ),
    [memeList]
  );

  const value = {
    pageView,
    setpageView,
    heartList,
    hotList,
    updateMemeStatus,
    setMemeList,
    memeList,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
