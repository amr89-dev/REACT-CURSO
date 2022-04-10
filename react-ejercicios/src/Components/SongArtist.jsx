import React from "react";

const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        Nacimiento:{artist.intBornYear} - {artist.intDeadYear || "Presente"}
      </p>
      <p>Pais:{artist.strCountry} </p>
      <p>Genero:{artist.strStyle}</p>
      <a href={artist.strWebsite}>Sitio Web</a>
      <p>Bio:{artist.strBiographyES}</p>
    </section>
  );
};

export default SongArtist;
