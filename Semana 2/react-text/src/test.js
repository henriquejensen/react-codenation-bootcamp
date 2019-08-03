import React from "react";

const valueFromAPI = ["react 1", "react 2", "vue 3", "svelte 4", "jquery 5"];

export default class AppTest extends React.Component {
  constructor(props) {
    super(props);

    this.propriedadeQueNaoVaiMudar = "Henrique Jensen";
    this.state = {
      input: "",
      inputLength: 0,
      clickOnInput: 0
    };
  }

  handleClickInput = event => {
    console.log("event", event);
    this.setState({
      clickOnInput: this.state.clickOnInput + 1
    });
  };

  handleChangeInput = value => {
    console.log("event", value);
    this.setState({
      input: value,
      inputLength: value.length
    });
  };

  render() {
    const arrayFiltered = valueFromAPI.filter(valor =>
      valor.includes(this.state.input)
    );

    return (
      <div>
        <NavBar
          inputChange={this.state.input}
          onChange={event => this.handleChangeInput(event.target.value)}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <List lista={arrayFiltered} stringFiltered={this.state.input} />
          <List lista={[1, 2, 3, 4]} />
        </div>
      </div>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <input
          style={{ borderColor: "red" }}
          value={this.props.inputChange}
          onChange={event => this.props.onChange(event)}
        />
      </div>
    );
  }
}

class List extends React.Component {
  highLight(valor) {
      const index = valor.indexOf(valor)++



    const valor1 = valor.su;
    const filter = "ri";
    const valor2 = "que";
    return (
      <di>
        <span>{valor1}</span>
        <span style={{ color: "yellow" }}>{this.props.stringFiltered}</span>
        <span>{valor2}</span>
      </di>
    );
  }

  render() {
    const arrayFiltered = this.props.lista;

    if (arrayFiltered.length === 0) {
        return <p>Vazio</p>
    }

    return (
      <ul>
        {arrayFiltered.map((valor, index) => {
          return (
            <li style={{ color: "red" }} key={index}>
              {this.highLight(valor)}
            </li>
          );
        })}
      </ul>
    );
  }
}

{
  /* <input
          style={{ borderColor: "red" }}
          value={this.state.input}
          onChange={event => this.handleChangeInput(event.target.value)}
        /> */
}
