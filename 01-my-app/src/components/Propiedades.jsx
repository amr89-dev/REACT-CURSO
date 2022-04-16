import React, { Component } from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.propsTitle}</h2>
      <ul>
        <li>Cadena: {props.string}</li>
        <li>Numero: {props.number}</li>
        <li>Boolean: {props.bool ? "true" : "false"}</li>
        <li>Array: {props.arreglo.join(",")}</li>
        <li>Objeto: {props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>Funcion: {props.arreglo.map(props.funcion).join(",")}</li>
        <li>Elemento React: {props.elementoReact}</li>
        <li>Componente React: {props.componenteReact}</li>
      </ul>
    </div>
  );
}
Propiedades.defaultProps = {
  propsTitle: "Las props",
};

Propiedades.propTypes = {
  number: PropTypes.number.isRequired,
};
