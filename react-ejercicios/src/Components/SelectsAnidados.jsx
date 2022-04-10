import React, { useState } from "react";
import SelecList from "./SelecList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Paises</h3>
      <SelecList
        title="pais"
        url="https://www.universal-tutorial.com/api/countries/"
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelecList
          title="estado"
          pais={state}
          url={`https://www.universal-tutorial.com/api/states/${state}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelecList
          title="ciudad"
          estado={town}
          url={`https://www.universal-tutorial.com/api/cities/${town}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
