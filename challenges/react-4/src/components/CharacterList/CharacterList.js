import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const CharacterList = ({ characters }) => (
  <Container>
    {characters.map(character => (
      <CharacterListItem key={character.id} character={character} />
    ))}
  </Container>
);

function mapStateToProps({ charactersReducer }) {
  return {
    characters: charactersReducer.characters
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default connect(mapStateToProps)(CharacterList);
