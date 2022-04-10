import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "invierno"],
    };
  }
  render() {
    //console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del Año</h3>
        <ol>
          {this.state.seasons.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks</h3>
        {data.frameworks.map((el) => (
          <ElementoLista key={el.id} el={el} />
        ))}
      </div>
    );
  }
}
