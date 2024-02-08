import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';
const CardContainer = () => {
    const {loading , posts } = useContext(AppContext);
  return (
    <div className='card-container'>
      {
          loading ? 
          (<Spinner/>) 
          : 
          (
            posts.map((post) =>{
                return <Card post={post} key={post.id}></Card>
            })
          )
      }
    </div>
  )
}

export default CardContainer
