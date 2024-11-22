import Button from '../Button';
import Logo from '../Logo';
import SearchBar from '../SearchBar';

const Nav = () => {
  return(
  <>
  <nav className='nav'>
    <Logo image='/Logo3.png' cusStyle='logo2'/>
    <Button title='Github Repo' cusStyle='nav-btn' dest='/'tab='_blank'/>
    <Button title='Api Info' cusStyle='nav-btn' dest='https://help.searchspring.net/hc/en-us/sections/115000119223-Search-API'tab='_blank'/>
    <SearchBar/>
  </nav>
  </>
  )
}

export default Nav