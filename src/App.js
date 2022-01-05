import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import Upload from "./Upload";
import ShowImage from "./ShowImage";

const App = () => {
  const [appState, setAppState] = useState("start");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!image && !imageUrl) setAppState("start");
    else if (!imageUrl && image) setAppState("loading");
    else setAppState("showimage");
  }, [image, imageUrl]);

  return (
    <div id="app-container">
      {appState === "start" && (
        <Upload setImage={setImage} changeState={setAppState} />
      )}
      {appState === "loading" && (
        <Loading setImageUrl={setImageUrl} image={image} />
      )}
      {imageUrl && <ShowImage imageUrl={imageUrl} />}
      <p id="footer">
        Created by <strong>robinaerts</strong>
      </p>
    </div>
  );
};

export default App;
