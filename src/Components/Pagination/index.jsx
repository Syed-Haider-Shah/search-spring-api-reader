import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'; // Ensure these imports are correct
import { RecordHeading } from '..';

const Pagination = ({ pageData, searchKey }) => {
  const [currentPage, setCurrentPage] = useState(pageData.currentPage);
  const navigate = useNavigate();

  const handleClick = (next) => {
    setCurrentPage(next);
    navigate(`/detail?search=${searchKey}&page=${next}`);
  };

  return (
    <div className=''>
      <div className='pagination-cmpt'>
      {<RecordHeading heading={`Results for : "${searchKey}"`}/>}
      <div className='pagination pagination-btn'>
        {pageData.currentPage === 1 ? (
          <button className='disabled pagination-btn-disabled'>
            <LucideChevronLeft />
          </button>
        ) : (
          <button onClick={() => handleClick(pageData.previousPage)} className='pagination-btn prev'>
            <LucideChevronLeft />
          </button>
        )}


        {(pageData.currentPage !== pageData.totalPages ) ? (<button onClick={() => handleClick(pageData.currentPage)}className='pagination-btn'>{pageData.currentPage}</button>): <button onClick={() => handleClick(1)}className='pagination-btn'>{1}</button>}
        {(pageData.currentPage < pageData.totalPages-2 ) ? (<button onClick={() => handleClick(pageData.nextPage)}className='pagination-btn'>{pageData.nextPage}</button>): <></>}
        {(pageData.currentPage < pageData.totalPages-1 )  ? (<button onClick={() => handleClick(pageData.nextPage + 1)} className='pagination-btn'>{pageData.nextPage + 1}</button>): <></>}
        <div className='pagination-dot'>...</div>
        <button onClick={() => handleClick(pageData.totalPages)} className='pagination-btn'>{pageData.totalPages}</button>
        
        
        {pageData.currentPage === pageData.totalPages ? (
          <button className='disabled pagination-btn-disabled'>
            <LucideChevronRight />
          </button>
        ) : (
          <button onClick={() => handleClick(pageData.nextPage)} className='pagination-btn next'>
            <LucideChevronRight />
          </button>
        )}
        </div>
      </div>
    </div>
  );
};


Pagination.propTypes = {
  pageData: PropTypes.object.isRequired,
  searchKey: PropTypes.string.isRequired
}

export default Pagination;