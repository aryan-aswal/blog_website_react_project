import { createContext, useState, useEffect } from "react"
import apiUrl from "../data";
import { useNavigate, useLocation } from 'react-router-dom'
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [ loading, setLoading ] = useState(false);
    const [ pageCount, setPageCount ] = useState(1);
    const [ posts, setPosts ] = useState([]);
    const [ totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    const value = {
        loading, 
        setLoading, 
        pageCount, 
        setPageCount,
        posts, 
        setPosts,
        totalPages,
        setTotalPages,
        fetchData,
        handlePageChange
    }

    async function fetchData(page = 1, tag = null, category) {
        let url = `${apiUrl}?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
        }
        if(category) {
            url += `&category=${category}`
        }
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTotalPages(data.totalPages);
            setPageCount(data.page);
            setPosts(data.posts);
        }
        catch(e) {
            setTotalPages(null);
            setPageCount(data.page);
            setPosts([]);
        }
        setLoading(false);
      }
      function handlePageChange(page) {
        setPageCount(page);
        navigate({search: `?page=${page}`});
      }
    return <AppContext.Provider value = {value}>{children}</AppContext.Provider>
}

// Steps for Creating Context API
// 1. create the context (createContext)
// 2. create a function which will proivde the context also it will include --> 1. all the useState variables ya fir jo bhi ham props me pass krte agr context api use nahi krte tab.
// 3. ek value object banaenge jisme ham saari values pass kr denge variables and functions 
// 4. all the other functions you want to add you can add in it
// 5. return bhi krna hai context ko return 
// <{jo bhi context create kiya hai uska naam}.Provider value = {value}>{children}</  {jo bhi context create kiya hai uska naam}.Provider>