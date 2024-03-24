import React from "react";
import Title from "./Title";
import BackgroundVideo from "./BackgroundVideo";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const now_playing = useSelector((store) => store?.movies?.NowPlayingMovie);

  if (!now_playing) return;

  const { id, title, overview } = now_playing[18];

  return (
    <div>
      <Title title={title} overview={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
};

export default MainContainer;
