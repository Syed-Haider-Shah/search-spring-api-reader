import '../index.css'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import SubmitButton from '../SubmitButton';

const SearchBar = () => {

  const [searchKey, setKey] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchKey.trim()) {
      console.log('Saving Search Term:', searchKey)
      setKey('')
    }
  }

  return(
    <>
    <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Search Term..."
          className="searchbar"
        />
        <SubmitButton cusStyle='search-btn'>
          <ArrowUp color={'white'}/>
          </SubmitButton>
      </form>
    </>
  )
}

export default SearchBar