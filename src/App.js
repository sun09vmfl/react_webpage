import Banner from './Component/Banner';
import BrandStory from './Component/BrandStory';
import Footet from './Component/Footet';
import Info from './Component/Info';
import Main from './Component/Main';
import Nav from './Component/Nav';
import Service from './Component/Service';
import GlobalStyled from './asset/GlobalStyled';
import Talk from './Component/Talk';

function App() {
  return (
    <>
      <GlobalStyled />
      <Nav />
      <Main />
      <Service />
      <BrandStory />
      <Info />
      <Talk />
      <Banner />
      <Footet />
    </>
  );
}

export default App;
