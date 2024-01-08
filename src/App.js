import './App.scss';

import Icon from './components/atoms/Icon/Icon';
import Button from './components/atoms/Button/Button'

function App() {
  return (
    <div className="App">
      <Icon name="search" />
      <Icon name="play" color='' />
      <Icon name="star" />
      <Button buttonType="icon" icon={<Icon name="play" />} />
    </div>
  );
}

export default App;
