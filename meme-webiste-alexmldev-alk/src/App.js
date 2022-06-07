import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import "./App.css";
import LatestViewContainer from "./routes/latestViewContainer/latestViewContainer.component";
import HotViewContainer from "./routes/hotViewContainer/hotViewContainer.component";
import HeartViewContainer from "./routes/heartViewContainer/heartViewContainer.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LatestViewContainer />} />
          <Route path="/hot" element={<HotViewContainer />} />
          <Route path="/favourites" element={<HeartViewContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
