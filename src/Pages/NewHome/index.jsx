import { HomeDisplayCard, Heading, Logo, SearchBar } from '../../Components';

const NewHome = () => {
  return(
    <div className='home'>
    <div className='hero'>
      <img src='/hero1.png' alt='Hero Section Image' className='hero'/>
      <img src='/hero2.png' alt='Hero Section Image' className='hero'/>
      <img src='/hero3.png' alt='Hero Section Image' className='hero'/>
      <img src='/hero4.png' alt='Hero Section Image' className='hero'/>
    </div>
    <Heading heading="Welcome to the Store."/>
    <div className='para-box'>
      <p1 className='para'>Our store is a clothing company dedicated to making your clothing experience seamless. By specializing in a variety of items, we focus on delivering high-quality products at lower prices.</p1>
    </div>

      <SearchBar searchBarStyle="search-bar-home" searchButtonStyle="search-btn-home" formStyle="form-home"/>

    <div className='section'>
      <h1 className='home-section-heading'>Pick from our Collection</h1>
      <div className='selection-section'>
        <HomeDisplayCard name ='Tops' image = 'hero1.png' buttonText="Shop Now" dest='/detail?search=tops&page=1'/>
        <HomeDisplayCard name ='Shoes' image = 'hero2.png'buttonText="Shop Now"dest='/detail?search=shoes&page=1'/>
        <HomeDisplayCard name ='Jeans' image = 'hero3.png'buttonText="Shop Now"dest='/detail?search=jeans&page=1'/>
        <HomeDisplayCard name ='Dresses' image = 'hero4.png'buttonText="Shop Now"dest='/detail?search=dresses&page=1'/>
      </div>
      </div>
    </div>
  );
}

export default NewHome;