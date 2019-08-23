import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';
import { getCharacters } from '../../redux/characters/sagas';

class Home extends Component {
  getCharacters(input) {
    setTimeout(this.props.getCharacters, 1500);
  }

  render() {
    return (
      <Fragment>
        <SearchBar onChange={input => this.getCharacters(input)} />
        <CharacterList />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacters: () => dispatch(getCharacters())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
