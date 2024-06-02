import React from 'react'
import news from '../assets/news.jpg'
const NewsItem = ({title,description,src,url,published}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-4 py-2" style={{maxWidth:"340px"}}>
      {/*In this If images not load on api then by default image would be shown*/ }
  <img src={src?src:news} style={{height:"200px", width:"300px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,45)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News Description is currently not leading but it will  be leading soon"}</p>

    <a href={url} className="btn btn-primary">Read More</a>
    <div className="my-2 text-light">{published}</div>
    
  </div>
</div>
  )
}

export default NewsItem