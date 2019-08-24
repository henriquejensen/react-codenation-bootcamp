import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';

const Field = ({ component, ...props }) => <input {...props} />;

class SearchBar extends Component {
  state = {
    characterInput: ''
  };

  handleCharacterInput = input => {
    this.setState({ characterInput: input });
  };

  handleKeyDown = key => {
    if (key === 'Enter') {
      this.props.onChange(this.state.characterInput);
    }
  };

  render() {
    return (
      <div>
        <Field
          name="searchform"
          placeholder="Buscar Personagens"
          component={SearchForm}
          type="text"
          onKeyDown={e => this.handleKeyDown(e.key)}
          onChange={e => this.handleCharacterInput(e.target.value)}
          data-testid="SearchBar"
          style={{ height: 35, width: 150 }}
        />
      </div>
    );
  }
}

export default SearchBar;
