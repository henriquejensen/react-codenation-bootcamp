import React from 'react';
import Title from './components/title';
import Text from './components/text';
import Content from './components/content';


import './App.css';

class App extends React.Component {

  state = {
    text: 'Número de clicks 0',
    title: 'Meu titulo',
    numberOfClicks: [0, 1,2,3,4]
  }

  handleClickButton() {
    const lastIndex = this.state.numberOfClicks.length - 1;
    const lastValue = this.state.numberOfClicks[lastIndex];
    
    this.setState({
      numberOfClicks: this.state.numberOfClicks.concat(lastValue + 1)
    });
  }

  render() {
    return (
      <div>

        {this.state.numberOfClicks.map(function(click) {
          return <p>{`Número de clicks ${click}`}</p>
        })}

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
