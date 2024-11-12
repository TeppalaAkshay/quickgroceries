import './App.css';

import Home from './Home';
import './Header/HeadNavCSS/Header.css';
import ImageSection from './Body/ImageSection';
import Categories from './Body/Categories/Categories';
import Deals from './Body/Deals/Deals';
import Personalized from './Body/Personalized/Personalized';

function App() {
  return (
    <div >
      <Home/>
      <ImageSection/>
      <Categories/>
      <Deals/>
      <Personalized/>

    </div>
  );
}

export default App;
