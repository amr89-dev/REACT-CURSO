import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelecList = ({ title, url, handleChange, pais, estado }) => {
  const { data, error, loading } = useFetch(url);

  if (!data) return null;
  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data;
  //console.log(options);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) =>
            estado ? (
              <option key={el.city_name} value={el.city_name}>
                {el.city_name}
              </option>
            ) : pais ? (
              <option key={el.state_name} value={el.state_name}>
                {el.state_name}
              </option>
            ) : (
              <option key={el.country_name} value={el.country_name}>
                {el.country_name}
              </option>
            )
          )}
      </select>
    </>
  );
};

export default SelecList;
