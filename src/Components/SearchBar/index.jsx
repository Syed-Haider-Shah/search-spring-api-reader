import '../index.css'
import PropTypes from 'prop-types';
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const SearchBar = ({formStyle, searchBarStyle, searchButtonStyle}) => {

  const [searchKey, setSearchKey] = useState('')
  const page = '1';
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchKey.trim()) {
      navigate(`/detail?search=${searchKey}&page=${page}`);
    }
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


