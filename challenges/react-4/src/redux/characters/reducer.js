//reducer
import response from '../../data/results.json';
import CHARACTERS_TYPE from './types';

const initialState = {
  characters: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHARACTERS_TYPE.REQUEST:
      return { ...state, characters: [...response.data.results] };

    default:
      return state;
  }
};
