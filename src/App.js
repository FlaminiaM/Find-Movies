import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './components/organisms/Header/Header';
import Homepage from './components/pages/Homepage/Homepage';
import DetailsPage from './components/pages/DetailsPage/DetailsPage';
import 'react-loading-skeleton/dist/skeleton.css';

import tmdbLogo from './assets/images/tmdb.svg'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:id" element={<DetailsPage type='movie' />} />
        <Route path="/series/:id" element={<DetailsPage type='tv' />}  />
      </Routes>
      <div className='footer'><img src={tmdbLogo} alt='tmdb logo'/> This product uses the TMDB API but is not endorsed or certified by TMDB</div>
    </div>
  )
}


export default App