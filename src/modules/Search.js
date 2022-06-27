import React from 'react';

const Search = ({ characterFilter, setCharacterFilter, maleFilter, femaleFilter, setMaleFilter, setFemaleFilter, animeFilter, setAnimeFilter }) => {
  const changeFilter = (e) => {
    setCharacterFilter(e.target.value);
  };

  const changeMale = (e) => {
    setMaleFilter(!maleFilter);
  };
  const changeFemale = (e) => {
    setFemaleFilter(!femaleFilter);
  };

  const changeAnime = (e) => {
    setAnimeFilter(e.target.value);
  };

  return (
    <div className='my-5'>
      <label>Nazwa postaci</label>
      <input type='text' className='form-control form-control-lg mb-1 p-3' onChange={changeFilter} value={characterFilter} placeholder='Tu wpisz nazwe postaci.' />
      <label>Nazwa bajeczki</label>
      <input type='text' className='form-control form-control-lg p-3' onChange={changeAnime} value={animeFilter} placeholder='Tu wpisz nazwe bajki.' />
      <div className='mt-2 px-1 d-flex justify-content-center'>
        <div className='form-check mx-2'>
          <input type='checkbox' className='form-check-input' id='maleCheck' checked={maleFilter} onChange={changeMale}></input>
          <label className='form-check-label' htmlFor='maleCheck'>
            Chłop
          </label>
        </div>
        <div className='form-check mx-2'>
          <input type='checkbox' className='form-check-input' id='femaleCheck' value='true' checked={femaleFilter} onChange={changeFemale}></input>
          <label className='form-check-label' htmlFor='femaleCheck'>
            Baba
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
