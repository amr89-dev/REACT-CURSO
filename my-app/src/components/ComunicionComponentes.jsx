import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comuncacion entre componentes</h2>
        <Hijo mensaje="Mensaje para hijo 1" />
        <Hijo
          incrementarContardor={this.incrementar}
          mensaje="Mensaje para el hijo 2"
          estado={this.state.contador}
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementarContardor}>+</button>
      <div>{props.estado}</div>
    </>
  );
}
