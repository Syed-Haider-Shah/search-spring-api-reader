import { LucideChevronRight, LucideChevronLeft } from 'lucide-react';
import PropTypes from 'prop-types';

const Pagination = ({pageData}) => {

  return (
    <div>
      <div>Search Term</div>


      <div className='pagination pagination-btn'>
      {pageData.currentPage === 1? (<button className='disabled pagination-btn-disabled'><LucideChevronLeft/></button>):(<button className='pagination-btn prev'><LucideChevronLeft/></button>)}
      <button className='pagination-btn'>{pageData.currentPage}</button>
      <button className='pagination-btn'>{pageData.nextPage}</button>
      <button className='pagination-btn'>{pageData.nextPage + 1}</button>
      <div className='pagination-btn'>...</div>
      <button className='pagination-btn'>{pageData.totalPages}</button>
      {pageData.currentPage === pageData.totalPages? (<button className='disabled pagination-btn-disabled'><LucideChevronRight/></button>):(<button className='pagination-btn next'><LucideChevronRight/></button>)}
    </div>
    </div>
  );
}

Pagination.propTypes = {
  pageData: PropTypes.object.isRequired,
}

export default Pagination;