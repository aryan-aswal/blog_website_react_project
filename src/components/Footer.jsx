import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
  const { pageCount, totalPages, handlePageChange } = useContext(AppContext);
  if(!totalPages) return null;
  return (
    <div className='footer-section-wrapper'>
      <div className='footer-container'>
        <div className='button-container'>
          {
            pageCount > 1 && pageCount < totalPages ? 
            (
              <div>
                <button  className='btn' onClick={()=>{handlePageChange(pageCount-1)}}>Previous</button>
                <button className='btn'  onClick={()=>{handlePageChange(pageCount+1)}}>Next</button>
              </div>
            ) 
            : 
            (
              pageCount == 1 ? 
              (<button className='btn'  onClick={()=>{handlePageChange(pageCount+1)}}>Next</button>) 
              : 
              (<button  className='btn' onClick={()=>{handlePageChange(pageCount-1)}}>Previous</button>)
            ) 
          }
        </div>
        <div className="page-info-div">
          <p className='page-info'>Page {pageCount} of {totalPages}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
