import Api from '../utils/api';

class CharacterService {
  static getCharacters(payload) {
    const { publicKey, timeStamp, hash, limit, name } = payload;
    return Api.get(
     // TODO implementar 
    );
  }
}

export default CharacterService;

