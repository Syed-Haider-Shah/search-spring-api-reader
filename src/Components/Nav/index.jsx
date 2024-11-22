import Button from '../Button';
import Logo from '../Logo';

const Nav = () => {
  return(
  <>
  <nav className='nav'>
    <Logo image='/Logo3.png' cusStyle='logo2'/>
    <Button title='Github Repo' cusStyle='nav-btn' dest='/'tab='_blank'/>
    <Button title='Api Info' cusStyle='nav-btn' dest='/about'tab='_blank'/>
    
  </nav>
  </>
  )
}

export default Nav