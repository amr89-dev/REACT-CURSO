import React from "react";
import { useParams } from "react-router-dom";
import SongDetails from "../components/SongDetails";

const SongPages = ({ mySongs }) => {
  let { id } = useParams();
  console.log(id, mySongs, mySongs[id]);
  let currentSong = mySongs[id];
  let { search, bio, lyric } = currentSong;
  return <SongDetails search={search} bio={bio} lyric={lyric} />;
};

export default SongPages;
