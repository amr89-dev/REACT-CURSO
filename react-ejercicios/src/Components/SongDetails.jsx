import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, bio, lyric }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el artista <em>${search.artist}</em>`}
          bgColor="#dc3545"
        />
      )}
      {lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la canción <em>${search.song}</em>`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyric={lyric.lyrics} />
      )}
    </>
  );
};

export default SongDetails;
