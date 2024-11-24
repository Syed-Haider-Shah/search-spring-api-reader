import { SearchBar, Heading, Logo} from '../../Components';
import '../index.css'


const Home = () => {
  return (
    <div className='home'>
      <Logo image='/Logo3.png' cusStyle='logo2' height="120"/>
      <Heading heading="Welcome User"/>
      <SearchBar searchBarStyle="search-bar-home" searchButtonStyle="search-btn-home" formStyle="form-home"/>
    </div>
  );
}

export default Home;  

