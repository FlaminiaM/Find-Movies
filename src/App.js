import './App.scss';

import Header from './components/organisms/Header/Header';
import TopRatedSection from './components/organisms/TopRatedSection/TopRatedSection';
import UpcomingSection from './components/organisms/UpcomingSection/UpcomingSection';

function App() {
  return (
    <div className="App">
      <Header />
      <TopRatedSection />
      <UpcomingSection />
    </div>
  );
}
export default App;
