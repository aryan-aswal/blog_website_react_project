import { useContext, useEffect } from 'react';
import './App.css'
import { AppContext } from './context/AppContext';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';

function App() {
  const {fetchData} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(()=>{
    const page = searchParams.get("page");
    if(location.pathname.includes('tags')) {
      const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page), tag);
    } else if(location.pathname.includes('categories')) {
      const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page), null, category);
    } else {
      fetchData(Number(page))
    }
    console.log(location.pathname);
    console.log(location.search);
  },[location.pathname, location.search])
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blog/:blogId' element={<BlogPage/>}></Route>
      <Route path='/tags/:tag' element={<TagPage/>}></Route>
      <Route path='/categories/:category' element={<CategoryPage/>}></Route>
    </Routes>
  )
}

export default App
