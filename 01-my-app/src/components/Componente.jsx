import React, { Component } from "react";

//Componente en formato de funcion expresada
const Componente = (props) => <h3>{props.msg}</h3>;

//Componente en formato de funcion declarada
/* function Componente(props) {
  return <h1>{props.msg}</h1>;
} */

//Componente basado en clases
/* class Componente extends Component {
  render() {
    return <h1>{this.props.msg}</h1>;
  }
} */

export default Componente;
