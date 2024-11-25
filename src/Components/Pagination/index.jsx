import { useState } from 'react';
import PropTypes from 'prop-types';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import { PaginationBtn, RecordHeading } from '..';
import "./index.css"

const Pagination = ({ pageData, searchKey }) => {

const determineDisable = (value) => {
  if(value ===0 ) {
    return true;
  }
  return false;
}

return (
  <div className=''>
    <div className='pagination-cmpt'>
    <RecordHeading heading={`Results for : "${ searchKey ? searchKey: "All Results"}"`}/>
    
    <div className='pagination'>
    <PaginationBtn nextPage={pageData.previousPage} style="" searchKey={searchKey} isDisable={determineDisable(pageData.previousPage)}>
        <LucideChevronLeft/> 
      </PaginationBtn>
        {/*-----------------------------------------------------------------------------------*/}

      {pageData.previousPage !== 0 && <PaginationBtn nextPage={pageData.currentPage - 1} style="" searchKey={searchKey}>{pageData.previousPage}</PaginationBtn>}
      <PaginationBtn nextPage={pageData.currentPage} style=" selected" searchKey={searchKey}>{pageData.currentPage}</PaginationBtn>
      {pageData.nextPage !== 0 && <PaginationBtn nextPage={pageData.currentPage + 1} style="" searchKey={searchKey}>{pageData.nextPage}</PaginationBtn>}


      {/*-----------------------------------------------------------------------------------*/}
      <PaginationBtn nextPage={pageData.nextPage} style="" searchKey={searchKey} isDisable={determineDisable(pageData.nextPage)}>
        <LucideChevronRight/> 
      </PaginationBtn>
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