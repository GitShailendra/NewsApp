import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import ShowError from './ShowError';

const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);
    const[isError,setIsError]=useState(false)
    //here the api call with useEffect
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then((response) => 
            
            response.json()
        )
        .then(data=>{
            
            
            setArticles(data.articles)})
            
        .catch((err)=>{



            
            
            setIsError(true)
        })
    },[category])
  return (
    <div>
        <h2 className='text-center my-4'>Latest <span className='badge bg-danger'>News</span></h2>
        {/*In this condition if isError is true then show the error component otherwise map the articles data*/ }
        {isError?<ShowError/>:<>{articles.map((news,idx)=>{
            return(
                <NewsItem key={idx} title={news.title} description = {news.description} src = {news.urlToImage} url = {news.url} published = {news.publishedAt}/>
            )
        })}</>}
    </div>
  )
}

export default NewsBoard