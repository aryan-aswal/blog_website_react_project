import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardContainer from '../components/CardContainer'
import { AppContext } from '../context/AppContext';
const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);
  const { totalPages } = useContext(AppContext);
  return (
    <div className='main-div page'>
      <Header></Header>
      <div className='card-container'>
        
        <div className='flex'>
          <button className='btn' onClick={()=>{navigate(-1)}}>Back</button>
          <h2>Blogs Tagged <span className='tagColor'>#{tag}</span></h2>
        </div>
        <CardContainer></CardContainer>
      </div>
      {
        totalPages > 1 ? (<Footer></Footer>) : (<></>)
      }
    </div>
  )
}

export default TagPage
