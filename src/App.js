import './App.scss';

import searchIcon from './assets/icons/search.svg';

import Icon from './components/atoms/Icon/Icon';
import Button from './components/atoms/Button/Button';
import Input from './components/atoms/Input/Input';
import InputGroup from './components/molecules/InputGroup/InputGroup';
import TabsContainer from './components/molecules/TabsContainer/TabsContainer';
import Rating from './components/atoms/Rating/Rating';
import Loader from './components/atoms/Loader/Loader';
import Swiper from './components/organisms/Swiper/Swiper';


function App() {
  return (
    <div className="App">
      {/* <Icon name="search" />
      <Icon name="play" color='' />
      <Icon name="star" />
      <Input inputType='text' icon={searchIcon} placeholder="Search FindMovies" />
      <Button buttonType="icon" icon={<Icon name="play" />} /> */}
      <TabsContainer />
      {/* <Rating rating='3.5' /> */}
      <Swiper />

      <Loader />
    </div>
  );
}

export default App;
