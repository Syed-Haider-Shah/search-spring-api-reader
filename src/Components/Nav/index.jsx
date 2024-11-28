import Button from '../Button';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import "./index.css";

const Nav = () => {
  return(
  <>
  <nav className='nav'>
    <Logo image='/Logo3.png' cusStyle='logo2' height="60"/>
    <div className='hide-on-mobile'>
    <Button title='Hats' cusStyle='nav-btn' dest='/detail?search=hats&page=1'/>
    <Button title='Swimsuits' cusStyle='nav-btn' dest='/detail?search=swimsuits&page=1'/>
    <Button title='Sunglasses' cusStyle='nav-btn' dest='/detail?search=sunglasses&page=1'/>
    <Button title='Sandals' cusStyle='nav-btn' dest='/detail?search=sandals&page=1'/>
    <Button title='Towels' cusStyle='nav-btn' dest='/detail?search=towels&page=1'/>
    </div>
    <SearchBar formStyle="form-nav" searchBarStyle="searchbar-nav" searchButtonStyle="search-btn-nav"/>
  </nav>
  </>
  )
}

export default Nav