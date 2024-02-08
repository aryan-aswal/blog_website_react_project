import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';
const CategoryPage = () => {
  const { totalPages } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/').at(-1)
  return (
    <div className='main-div page'>
      <Header></Header>
      <div className='card-container'>
        <div className='flex'>
          <button className='btn'  onClick={()=>{navigate(-1)}}>back</button>
          <h2>Blogs On <span>{category}</span></h2>
        </div>
        <CardContainer></CardContainer>
      </div>
      {
        totalPages > 1 ? (<Footer></Footer>) : (<></>)
      }
    </div>
  )
}

export default CategoryPage
