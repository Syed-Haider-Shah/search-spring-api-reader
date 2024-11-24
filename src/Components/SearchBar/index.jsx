import '../index.css'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [searchKey, setSearchKey] = useState('')
  //const [q, setQ] = useState('')
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //     setQ(searchKey);
  //     console.log('Saving Search Term:', searchKey)
  //     setKey('')
  //     console.log('value of q', q)
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchKey.trim()) {
      navigate(`/detail?search=${searchKey}`);
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
        <button className='search-btn'>
          <ArrowUp color={'white'}/>
          </button>
      </form>
    </>
  )
}

export default SearchBar


