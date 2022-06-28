import React from 'react';
import { useState, useEffect } from 'react';

const Search = ({
  characterFilter,
  setCharacterFilter,
  maleFilter,
  femaleFilter,
  setMaleFilter,
  setFemaleFilter,
  animeFilter,
  setAnimeFilter,
  roleFilter,
  setRoleFilter,
  favoritesFilterFrom,
  setFavoritesFilterFrom,
  favoritesFilterTo,
  setFavoritesFilterTo,
  timeFilterFrom,
  setTimeFilterFrom,
  timeFilterTo,
  setTimeFilterTo,
  scoreFilterFrom,
  setScoreFilterFrom,
  scoreFilterTo,
  setScoreFilterTo,
}) => {
  const [favoritesFromArray, setFavoritesFromArray] = useState([]);
  const [favoritesToArray, setFavoritesToArray] = useState([]);
  const [timeFromArray, setTimeFromArray] = useState([]);
  const [timeToArray, setTimeToArray] = useState([]);
  const [scoreFromArray, setScoreFromArray] = useState([]);
  const [scoreToArray, setScoreToArray] = useState([]);

  useEffect(() => {
    const favoritesFrom = [];
    let favoritesIncrement = 100;
    for (let i = 1000; i <= 170000; i += favoritesIncrement) {
      if (i >= 3000 && i < 10000) {
        favoritesIncrement = 500;
      } else if (i >= 10000 && i < 50000) {
        favoritesIncrement = 1000;
      } else if (i >= 50000 && i < 100000) {
        favoritesIncrement = 5000;
      } else if (i >= 100000) {
        favoritesIncrement = 10000;
      }
      favoritesFrom.push(i);
    }
    setFavoritesFromArray(favoritesFrom);

    const favoritesTo = [];
    let favoritesDecrement = 10000;
    for (let i = 170000; i >= 1000; i -= favoritesDecrement) {
      if (i <= 100000 && i > 50000) {
        favoritesDecrement = 5000;
      } else if (i <= 50000 && i > 10000) {
        favoritesDecrement = 1000;
      } else if (i <= 10000 && i > 3000) {
        favoritesDecrement = 500;
      } else if (i <= 3000) {
        favoritesDecrement = 100;
      }

      favoritesTo.push(i);
    }
    setFavoritesToArray(favoritesTo);

    const yearsFrom = [];
    for (let i = 1960; i <= 2030; i++) {
      yearsFrom.push(i);
    }
    setTimeFromArray(yearsFrom);

    const yearsTo = [];
    for (let i = 2030; i >= 1960; i--) {
      yearsTo.push(i);
    }
    setTimeToArray(yearsTo);

    const scoreFrom = [];
    for (let i = 6; i <= 9.3; i += 0.1) {
      scoreFrom.push(i);
    }
    setScoreFromArray(scoreFrom);

    const scoreTo = [];
    for (let i = 9.3; i >= 6; i -= 0.1) {
      scoreTo.push(i);
    }
    setScoreToArray(scoreTo);
  }, []);

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

  const changeRole = (e) => {
    setRoleFilter(e.target.value);
  };

  const changeFavoritesFrom = (e) => {
    setFavoritesFilterFrom(+e.target.value);
  };

  const changeFavoritesTo = (e) => {
    setFavoritesFilterTo(+e.target.value);
  };

  const changeTimeFrom = (e) => {
    setTimeFilterFrom(+e.target.value);
  };

  const changeTimeTo = (e) => {
    setTimeFilterTo(+e.target.value);
  };

  const changeScoreFrom = (e) => {
    setScoreFilterFrom(parseFloat(e.target.value));
  };

  const changeScoreTo = (e) => {
    setScoreFilterTo(parseFloat(e.target.value));
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
      <label className='me-2'>Rola w bajce</label>
      <select className='form control custom-select' value={roleFilter} onChange={changeRole}>
        <option value='Wszystkie'>Wszystkie</option>
        <option value='Main'>Main</option>
        <option value='Supporting'>Supporting</option>
      </select>
      <div className='d-flex justify-content-center my-5 pb-5'>
        <div>
          <h3 className='text-center p-2'>Ramki ulubionych</h3>
          <div className='d-flex justify-content-center'>
            <div className='mx-5'>
              <h5>Od ilości</h5>
              <select className='form control custom-select' value={favoritesFilterFrom} onChange={changeFavoritesFrom}>
                {favoritesFromArray.map((favorite) => (
                  <option key={`from-${favorite}-favorite`} value={favorite}>
                    {favorite}
                  </option>
                ))}
              </select>
            </div>
            <div className='mx-5'>
              <h5>Do ilości</h5>
              <select className='form control custom-select' value={favoritesFilterTo} onChange={changeFavoritesTo}>
                {favoritesToArray.map((favorite) => (
                  <option key={`to-${favorite}-favorite`} value={favorite}>
                    {favorite}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-center p-2'>Ramki czasowe</h3>
          <div className='d-flex justify-content-center'>
            <div className='mx-5'>
              <h5>Od roku</h5>
              <select className='form control custom-select' value={timeFilterFrom} onChange={changeTimeFrom}>
                {timeFromArray.map((year) => (
                  <option key={`from-${year}-year`} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className='mx-5'>
              <h5>Do roku</h5>
              <select className='form control custom-select' value={timeFilterTo} onChange={changeTimeTo}>
                {timeToArray.map((year) => (
                  <option key={`to-${year}-year`} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-center p-2'>Ramki ocenowe</h3>
          <div className='d-flex justify-content-center'>
            <div className='mx-5'>
              <h5>Od oceny</h5>
              <select className='form control custom-select' value={scoreFilterFrom} onChange={changeScoreFrom}>
                {scoreFromArray.map((score) => (
                  <option key={`from-${score}-score`} value={score}>
                    {score.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
            <div className='mx-5'>
              <h5>Do oceny</h5>
              <select className='form control custom-select' value={scoreFilterTo} onChange={changeScoreTo}>
                {scoreToArray.map((score) => (
                  <option key={`to-${score}-score`} value={score}>
                    {score.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
