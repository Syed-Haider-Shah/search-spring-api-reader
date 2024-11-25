import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./index.css"

const PaginationBtn = ({nextPage, style, children,searchKey, isDisable}) => {
  const nav = useNavigate();
  const handleClick = (next) => {
    nav(`/detail?search=${searchKey}&page=${next}`);
  }


  return (
    <button onClick={() => handleClick(nextPage)} disabled={isDisable} className={`${style} pagination-btn ${isDisable ? "disabled" :  "not-disabled"}`}>
      {children}
    </button>
  );
}

PaginationBtn.propTypes = {
  nextPage : PropTypes.number,
  style : PropTypes.string,
  children : PropTypes.node,
  searchKey : PropTypes.searchKey,
  isDisable : PropTypes.bool
}

export default PaginationBtn;

