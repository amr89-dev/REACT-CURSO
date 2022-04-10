import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Productos = () => {
  const LIMIT = 20;
  let location = useLocation();
  //console.log(location);

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  //console.log(query);

  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || 20;

  //console.log(typeof start, typeof end);

  let history = useHistory();
  //console.log(history);

  const handlePrev = (e) => {
    history.push({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
  };

  const handleNext = (e) => {
    history.push({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > 20 && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
