import React from 'react';
import Record from './Record';

const Table = ({ characters, characterFilter, maleFilter, femaleFilter, animeFilter }) => {
  const filteredCharacters = characters
    .filter((character) => character.name.toLowerCase().includes(characterFilter))
    .filter((character) => {
      const gender = character.gender;
      if (!maleFilter) {
        if (gender === 'Female' || gender === '?') return character;
      }
      if (!femaleFilter) {
        if (gender === 'Male' || gender === '?') return character;
      }
      if (maleFilter && femaleFilter) return character;
    })
    .filter((character) => character.anime_name.toLowerCase().includes(animeFilter));
  return (
    <table className='table table-striped table-hover table-bordered'>
      <thead>
        <tr className='text-light text-center'>
          <th scope='col'>#</th>
          <th scope='col'>Nazwa</th>
          <th scope='col'>Obrazek</th>
          <th scope='col'>Liczba Ulubionych</th>
          {/* <th scope='col'>Wiek</th> */}
          <th scope='col'>Płeć</th>
          <th scope='col'>Rola w Bajce</th>
          <th scope='col'>Nazwa Anime</th>
          <th scope='col'>Rok Anime</th>
          <th scope='col'>Ocena Anime</th>
          <th scope='col'>Studia Anime</th>
          <th scope='col'>Tagi</th>
          <th scope='col'>Demografia</th>
        </tr>
      </thead>
      <tbody>
        {filteredCharacters.map((element, idx) => (
          <Record character={element} key={element.mal_id} idx={idx} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
