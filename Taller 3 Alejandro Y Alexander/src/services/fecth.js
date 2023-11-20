
const BASE_URL = 'https://rickandmortyapi.com/api/character'; 
export const fetchCharacters = async () => { 
  console.log('Fetching characters...'); 

  return fetch(`${BASE_URL}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from API');
      }
      return res.json();
    })
    .then((data) => {
      const newCharacters = data.results.map(character => { 
        const { id, name, status, species, type, gender, image } = character; 
        return new CharacterModel(id, name, status, species, type, gender, image); 
      });
      return newCharacters;
    })
    .catch((e) => {
      console.log(e);
      throw new Error(e);
    });
};
