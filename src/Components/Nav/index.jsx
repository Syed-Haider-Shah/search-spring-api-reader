import Button from '../Button';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import "./index.css";

const Nav = () => {
  return(
  <>
  <nav className='nav'>
    <Logo image='/Logo3.png' cusStyle='logo2' height="60"/>
    <Button title='Github Repo' cusStyle='nav-btn' dest='https://github.com/Syed-Haider-Shah/search-spring-api-reader'tab='_blank'/>
    <Button title='Api Info' cusStyle='nav-btn' dest='https://help.searchspring.net/hc/en-us/sections/115000119223-Search-API'tab='_blank'/>
    <SearchBar formStyle="form-nav" searchBarStyle="searchbar-nav" searchButtonStyle="search-btn-nav"/>
  </nav>
  </>
  )
}

export default Nav