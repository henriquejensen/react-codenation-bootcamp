import React from 'react';
import Title from './components/title';
import Text from './components/text';
import Content from './components/content';


import './App.css';

class App extends React.Component {

  state = {
    text: 'Número de clicks 0',
    title: 'Meu titulo',
    numberOfClicks: 0
  }

  handleClickButton() {
    const numberOfClicks = this.state.numberOfClicks + 1;
    this.setState({
      text: `Número de clicks ${numberOfClicks}` ,
      numberOfClicks: numberOfClicks
    });
  }

  render() {
    return (
      <div>

        <p>{this.state.numberOfClicks}</p>

        <div>
          <Text text={this.state.title} />
        </div>

        <div>
          <Text text={this.state.text} />
        </div>

        <div>
          <button onClick={() => this.handleClickButton()} >Mudar State</button>
        </div>

        <Title></Title>
        <Content></Content>
      </div>
    );
  }
}

export default App;
