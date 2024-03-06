import React from 'react'
import ReactPaginate from 'react-paginate';
import "./PaginationBtns.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from './Button.js';
function PaginationBtns() {
  return (
    <div>
    <ReactPaginate
    breakLabel="..."
    nextLabel={
        <Button type="primaryy">
        <KeyboardArrowRightIcon/>
        </Button>
    }
    // onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={5}
    previousLabel={
        <Button type="primaryy">
        <KeyboardArrowLeftIcon/>
        </Button>
    }
    containerClassName='pagContainer'
    pageClassName='pagItem'
    activeClassName='activePagItem'
  />
    </div>
  )
}

export default PaginationBtns
