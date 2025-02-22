import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {

const [articles,setArticles] = useState([]);

useEffect(()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f4258c36e7a8470584e287f612d251eb`;
  fetch(url).then(Response=> Response.json()).then(data=> setArticles(data.articles));
},[category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
)
}

export default NewsBoard
