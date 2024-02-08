import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import Card from '../components/Card'
const BlogPage = () => {
  const [ blog, setBlog ] = useState(null);
  const [ relatedBlogs, setRelatedBlogs ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const locate = useLocation();
  const navigate = useNavigate();
  
  const blogId = locate.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("error");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId) {
      fetchRelatedBlogs();
    }
  },[locate.pathname])

  return (  
    <div className='main-div page'>
      <Header></Header>
      <div className='card-container'>
        
        <div>
          <button className='btn' onClick={()=>{navigate(-1)}}>Back</button>
          {
            loading ? (<Spinner></Spinner>) :
            
            blog ? 
            (<div>
              <Card post={blog}></Card>
              <h2 className='related-post'>Related Blogs</h2>
              {
                relatedBlogs.map((post)=>{
                  return (
                    <div key={post.id}>
                      <Card post = {post}></Card>
                    </div>
                  )
                })
              }
            </div>) :
            (<div>No Blog Found</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default BlogPage
