import './App.scss';

import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/organisms/Header/Header';
import Homepage from './components/pages/Homepage/Homepage';
import DetailsPage from './components/pages/DetailsPage/DetailsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:id" element={<DetailsPage type='movie' />} />
        <Route path="/series/:id" element={<DetailsPage type='tv' />}  />
      </Routes>
    </div>
  )
}
export default App;
