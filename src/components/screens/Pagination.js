import React from 'react'

const Pagination = ({ reposPerPage, totalRepos, paginate, currentPage }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++){
        pageNumbers.push(i);
    }


  return (
      
    <>
        <div className='pagenumber'>
            <a className='pageno' href="!#" onClick={() =>paginate(currentPage - 1)}>&nbsp;&nbsp;Previous&nbsp;&nbsp;</a>
            {pageNumbers.map(number =>(
                <div>
                
                <span key={number}>
                    <a className='pageno' href='!#' onClick={() =>paginate(number)}>&nbsp;&nbsp;{number}&nbsp;&nbsp;</a>
                </span>
                
                </div>
            ))}
            <a className='pageno' href="!#" onClick={() =>paginate(currentPage + 1)}>&nbsp;&nbsp;Next&nbsp;&nbsp;</a>

        </div>
    
    </>
  )
}

export default Pagination