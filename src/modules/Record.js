import React from 'react';

const Record = ({ character, idx }) => {
  let genderColor = character.gender === 'Male' ? 'text-primary text-center' : 'text-danger text-center';

  return (
    <tr className=''>
      <td className='character-id text-center'>{idx + 1}</td>
      <td className='text-warning text-uppercase character-name text-center'>
        <h5>{character.name}</h5>
      </td>
      <td className='character-img'>
        <img src={character.image} alt='Obrazek' height='250px' />
      </td>
      <td className='character-favorites text-center'>{character.favorites}</td>
      {/* <td className='character-age text-center'>{character.age}</td> */}
      <td className={genderColor}>
        <h6>{character.gender}</h6>
      </td>
      <td className='character-role text-center'>{character.role}</td>
      <td className='anime-name text-center'>{character.anime_name}</td>
      <td className='anime-year text-center'>{character.anime_year}</td>
      <td className='anime-score text-center'>{character.anime_score}</td>
      <td className='anime-studio'>
        <ul>
          {character.anime_studios.map((studio, i) => (
            <li key={studio + i}>{studio}</li>
          ))}
        </ul>
      </td>
      <td className='anime-tags'>
        <ul>
          {character.anime_tags.map((tag, i) => (
            <li key={tag + i} className='text-left'>
              {tag}
            </li>
          ))}
        </ul>
      </td>
      <td className='anime-demographic'>
        {character.anime_demographic.map((demographic, i) => (
          <p key={demographic + i}>{demographic}</p>
        ))}
      </td>
    </tr>
  );
};

export default Record;
