import React from 'react';
import { useState, useEffect } from 'react';
import './css/bootstrap-vapor.min.css';

import Header from './modules/Header';
import Table from './modules/Table';
import Footer from './modules/Footer';

import Search from './modules/Search';

import dataJson from './data/postacie.json';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  // --- Main ---
  const [data, setData] = useState(dataJson);
  const [characterFilter, setCharacterFilter] = useState('');
  // --- Main Filters ---
  const [animeFilter, setAnimeFilter] = useState('');
  const [maleFilter, setMaleFilter] = useState(true);
  const [femaleFilter, setFemaleFilter] = useState(true);
  const [roleFilter, setRoleFilter] = useState('Wszystkie');
  // --- Boundaries ---
  // Favorites
  const [favoritesFilterFrom, setFavoritesFilterFrom] = useState(1000);
  const [favoritesFilterTo, setFavoritesFilterTo] = useState(170000);
  // Time
  const [timeFilterFrom, setTimeFilterFrom] = useState(1960);
  const [timeFilterTo, setTimeFilterTo] = useState(2030);
  // Score
  const [scoreFilterFrom, setScoreFilterFrom] = useState(6.0);
  const [scoreFilterTo, setScoreFilterTo] = useState(9.3);
  // --- TODO ---
  const [studios, setStudios] = useState([]);
  const [tags, setTags] = useState([]);
  const [studioFilter, setStudioFilter] = useState([]);
  const [tagFilter, setTagFilter] = useState([]);

  const prepareStudios = (data) => {
    const animeStudios = data.map((character) => character.anime_studios);
    const animeStudiosUnpacked = [];
    for (let i = 0; i < animeStudios.length; i++) {
      for (let j = 0; j < animeStudios[i].length; j++) {
        const studioToPush = animeStudiosUnpacked.push(animeStudios[i][j]);
        animeStudiosUnpacked.push(studioToPush);
      }
    }
    const uniqueStudios = [...new Set(animeStudiosUnpacked)].filter((studio) => typeof studio === 'string');
    return uniqueStudios;
  };

  const prepareTags = (data) => {
    const animeTags = data.map((character) => character.anime_tags);
    const animeTagsUnpacked = [];
    for (let i = 0; i < animeTags.length; i++) {
      for (let j = 0; j < animeTags[i].length; j++) {
        const tagToPush = animeTagsUnpacked.push(animeTags[i][j]);
        animeTagsUnpacked.push(tagToPush);
      }
    }
    const uniqueTags = [...new Set(animeTagsUnpacked)].filter((tag) => typeof tag === 'string');
    return uniqueTags;
  };

  useEffect(() => {
    const uniqueStudios = prepareStudios(data);
    setStudios(uniqueStudios);

    const uniqueTags = prepareTags(data);
    setTags(uniqueTags);
  }, []);

  return (
    <div className='App'>
      <Header />

      <div className='container-fluid'>
        <div className='container mb-5'>
          <Search
            //Main
            characterFilter={characterFilter}
            setCharacterFilter={setCharacterFilter}
            // Gender
            maleFilter={maleFilter}
            setMaleFilter={setMaleFilter}
            femaleFilter={femaleFilter}
            setFemaleFilter={setFemaleFilter}
            // Anime
            animeFilter={animeFilter}
            setAnimeFilter={setAnimeFilter}
            // Role
            roleFilter={roleFilter}
            setRoleFilter={setRoleFilter}
            // Favorites
            favoritesFilterFrom={favoritesFilterFrom}
            setFavoritesFilterFrom={setFavoritesFilterFrom}
            favoritesFilterTo={favoritesFilterTo}
            setFavoritesFilterTo={setFavoritesFilterTo}
            // Time
            timeFilterFrom={timeFilterFrom}
            setTimeFilterFrom={setTimeFilterFrom}
            timeFilterTo={timeFilterTo}
            setTimeFilterTo={setTimeFilterTo}
            // Score
            scoreFilterFrom={scoreFilterFrom}
            setScoreFilterFrom={setScoreFilterFrom}
            scoreFilterTo={scoreFilterTo}
            setScoreFilterTo={setScoreFilterTo}
          />
        </div>

        <Table
          characters={data}
          characterFilter={characterFilter}
          maleFilter={maleFilter}
          femaleFilter={femaleFilter}
          animeFilter={animeFilter}
          roleFilter={roleFilter}
          favoritesFilterFrom={favoritesFilterFrom}
          favoritesFilterTo={favoritesFilterTo}
          timeFilterFrom={timeFilterFrom}
          timeFilterTo={timeFilterTo}
          scoreFilterFrom={scoreFilterFrom}
          scoreFilterTo={scoreFilterTo}
        />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
