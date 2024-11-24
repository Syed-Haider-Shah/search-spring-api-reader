import PropTypes from 'prop-types';
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import "./index.css"

const SearchBar = ({formStyle, searchBarStyle, searchButtonStyle}) => {

  const [searchKey, setSearchKey] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   // if (searchKey.trim()) {
      navigate(`/detail?search=${searchKey}&page=1`);
 //   }
  };

  return(
    <>
    <form onSubmit={handleSubmit} className={formStyle}>
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search Term..."
          className={searchBarStyle}
        />
        <button type ='submit' className={searchButtonStyle}>
          <ArrowUp color={'white'}/>
          </button>
      </form>
    </>
  )
}

SearchBar.propTypes = {
  formStyle: PropTypes.string,
  searchBarStyle: PropTypes.string,
  searchButtonStyle: PropTypes.string
}


export default SearchBar


