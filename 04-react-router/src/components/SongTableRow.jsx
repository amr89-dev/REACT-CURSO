import React from "react";
import { useHistory } from "react-router-dom";

const SongTableRow = ({ el, id, handleDeleteSong }) => {
  const { search, bio } = el;
  const avatar = bio.artists[0].strArtistThumb;
  const avatarStyle = {
    width: "auto",
    height: "40px",
  };
  //console.log(el);

  let history = useHistory();
  return (
    <tr>
      <td>
        <img style={avatarStyle} src={avatar} alt={search.artist} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => history.push(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
