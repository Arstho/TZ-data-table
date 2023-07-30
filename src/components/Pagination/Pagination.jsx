import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
  const next = <h4>Далее</h4>;
  const prev = <h4>Назад</h4>;

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel={next}
      onPageChange={(e) => onChangePage(e.selected + 1)} 
      pageRangeDisplayed={10}
      pageCount={10} 
      forcePage={currentPage - 1}
      previousLabel={prev}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
