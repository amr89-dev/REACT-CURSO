import React from "react";
import SongTableRow from "./SongTableRow";

const SongTable = ({ mySongs, handleDeleteSong }) => {
  return (
    <div>
      <h3>Mis canciones favoritas</h3>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Artista</th>
            <th>Canción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, i) => (
              <SongTableRow
                key={i}
                el={el}
                id={i}
                handleDeleteSong={handleDeleteSong}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">Sin Canciones </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
