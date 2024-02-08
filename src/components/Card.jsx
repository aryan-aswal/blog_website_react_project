import React from 'react'
import {NavLink} from 'react-router-dom'
const Card = (props) => {
  return (
    <div>
      <NavLink to={`/blog/${props.post.id}`}>
        <h1 className='card-heading'>{props.post.title}</h1>
      </NavLink>   
      
      <p className='para-1'>By <span className='author'>{props.post.author}</span> on <NavLink to={`categories/${props.post.category.replaceAll(' ', '-')}`}><span className='category'>{props.post.category}</span></NavLink></p>
      <p className="para-2">Posted On {props.post.date}</p>
      <p className='para-3'>{props.post.content}</p>
      <div className='tag-holder'>
        {
          props.post.tags.map((tag, index)=>{
            return (
              <NavLink  key={index} to={`/tags/${tag.replaceAll(' ', '-')}`}><span className='tag'>#{tag}   </span></NavLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default Card
