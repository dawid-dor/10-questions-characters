import React from 'react';
import { useState, useEffect } from 'react';
import './css/bootstrap-vapor.min.css';

import Header from './modules/Header';
import Table from './modules/Table';
import Footer from './modules/Footer';

import Search from './modules/Search';

import dataJson from './data/postacie.json';

function App() {
  const [data, setData] = useState(dataJson);
  const [characterFilter, setCharacterFilter] = useState('');
  const [animeFilter, setAnimeFilter] = useState('');
  const [maleFilter, setMaleFilter] = useState(true);
  const [femaleFilter, setFemaleFilter] = useState(true);

  return (
    <div className='App'>
      <Header />

      <div className='container-fluid'>
        <div className='container mb-5'>
          <Search
            characterFilter={characterFilter}
            setCharacterFilter={setCharacterFilter}
            maleFilter={maleFilter}
            setMaleFilter={setMaleFilter}
            femaleFilter={femaleFilter}
            setFemaleFilter={setFemaleFilter}
            animeFilter={animeFilter}
            setAnimeFilter={setAnimeFilter}
          />
        </div>

        <Table characters={data} characterFilter={characterFilter} maleFilter={maleFilter} femaleFilter={femaleFilter} animeFilter={animeFilter} />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
