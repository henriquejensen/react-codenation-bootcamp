/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchForm from '../../components/SearchForm/SearchForm';
import axios from 'axios';
import thor from '../../data/thor.json';
import series from '../../data/series.json';
import Button from '../../components/Button/Button';

class DetailsPage extends Component {
  state = {
    isEditing: false,
    character: thor.data.results[0],
    series: []
  };

  componentDidMount() {
    //use localStorage
    this.setState({ series: series.data.results });
  }

  componentWillUnmount() {
    //use localStorage newName for characters
  }

  handleIsEditing = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    this.setState({ isEditing: false });
  };

  handleOnChange = name => {
    const { character } = this.state;
    this.setState({ character: { ...character, name } });
  };

  renderHeader = () => {
    const { isEditing, character } = this.state;

    if (isEditing) {
      return (
        <WrapperHeader>
          <SearchForm
            onKeyUp={e => this.handleOnChange(e.target.value)}
            defaultValue={character.name}
            style={{ height: 35, width: 150 }}
          />
          <div>
            <Button onClick={this.handleSave}>Salvar</Button>
          </div>
        </WrapperHeader>
      );
    }

    return (
      <WrapperHeader>
        <h1>{character.name}</h1>
        <div>
          <Button onClick={this.handleIsEditing}>Editar</Button>
        </div>
      </WrapperHeader>
    );
  };

  render() {
    const { character, series } = this.state;
    return (
      <div>
        {this.renderHeader()}
        <img src={character.thumbnail.path + '.' + character.thumbnail.extension} width="400" />
        <p>{character.description}</p>
        <h4>Series({series.length})</h4>
        <ul>
          {series.map(serie => (
            <li key={serie.id}>{serie.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
`;

export default DetailsPage;
