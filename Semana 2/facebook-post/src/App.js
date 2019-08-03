import React from "react";

import "./App.css";

const IMAGE =
  "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png";
class App extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor");
    this.variavelDaClasse = "asdfasdf";
    this.x = "1fsdgsdfgsd";
  }

  state = {
    post: "Meu Post",
    image: ""
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {}

  handleChange(value) {
    this.setState({
      post: value
    });
  }

  render() {
    console.log("Render");
    return (
      <div>
        <img src={this.state.image} alt="Meu avatar" width="20" height="20" />
        <textarea
          value={this.state.post}
          onChange={event => this.handleChange(event.target.value)}
        />
        <Button>Publish</Button>
        <Card>
          <CardItem>T</CardItem>
          <CardItem>T</CardItem>
          <CardItem>T</CardItem>
          <CardItem>T</CardItem>
        </Card>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          borderColor: "blue"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

class CardItem extends React.Component {
  render() {
    return (
      <span
        style={{
          backgroundColor: "white",
          borderColor: "red",
          width: 10,
          height: 10,
          margin: 10,
          display: "flex",
          justifyContent: "center"
        }}
      >
        {this.props.children}
      </span>
    );
  }
}

function Button(props) {
  return (
    <button style={{ backgroundColor: "#36f021" }}>{props.children}</button>
  );
}

export default App;
