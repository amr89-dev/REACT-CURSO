import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    //console.log("Sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    //console.log("Sumando");
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos de Componentes de Clases ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow function
  sumar = (e) => {
    //console.log("Sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    //console.log("Sumando");
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos de Componentes de Clases ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

/* function Boton(props) {
  return <button onClick={props.myOwnClick}>Boton desde clase</button>;
} */

const Boton = ({ myOwnClick }) => (
  <button onClick={myOwnClick}>Boton desde clase</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.target);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button onClick={(e) => this.handleClick(e, "Hola")}>Saludar</button>
        {/*Evento Personalizado*/}
        {/*<Boton onClick={(e) => this.handleClick(e, "Hola")} />  <---- Asi no se debe hacer*/}
        <Boton myOwnClick={(e) => this.handleClick(e, "Hola")} />
      </div>
    );
  }
}
