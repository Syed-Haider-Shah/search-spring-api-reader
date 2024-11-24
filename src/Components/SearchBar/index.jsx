import '../index.css'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

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
    <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search Term..."
          className="searchbar"
        />
        <button type ='submit' className='search-btn'>
          <ArrowUp color={'white'}/>
          </button>
      </form>
    </>
  )
}

export default SearchBar


