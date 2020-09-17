import React, { Component } from 'react';

export default class Index extends Component {
  render() {
    return (
      <div style={{
        height: "100vh",
        overflowY: "scroll",
        overflowX: "hidden"
      }}>
        <h1 style={{ color: "#fff", textAlign: "center", margin: "2rem" }}> CALCULADORA ARQUITECTURA</h1>
        <h5 style={{ textAlign: "center", margin: "2rem", color: "#fff" }}><a href="a">ABOUT</a></h5>
        <h2 style={{ textAlign: "center", margin: "2rem" }}>

          <div><h5 ><a href="c">COMENZAR</a></h5>
          </div>
          <div>
            <p style={{ color: "#fff", textAlign: "center", margin: "2rem" }}>
              "El siguiente programa realizado para la asignatura de Arquitectura de Computadoras,
              realiza la conversion y cada una de las operaciones elementales entre numeros tanto decimales"
                    </p>
            <p style={{ textAlign: "center", margin: "2rem" }}>
              <img style={{ height: 124 }} src="../img/logo_espoch.png" />
            </p>

          </div>
        </h2>
      </div>

    );
  }
}
