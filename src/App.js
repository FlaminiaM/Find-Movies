import './App.scss';

import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/organisms/Header/Header';
import Homepage from './components/pages/Homepage/Homepage';
import MovieDetails from './components/pages/MovieDetails/MovieDetails';
import TvDetails from './components/pages/TvDetails/TvDetails'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/series/:tvId" element={<TvDetails />} />
      </Routes>
    </div>
  )
}
export default App;
