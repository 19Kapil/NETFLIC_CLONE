import React, { useEffect,useRef, useState} from 'react'
import './TittleCards.css'
import cards_data from'../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';



const TittleCards = ({title, category}) => {

 const[apiData, setApiData] = useState([]);
const cardsRef = useRef();
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjgwN2ZlNjNkZmM3N2FjNDA4YmFlZWRlNDc3Mjg0NSIsIm5iZiI6MTcyODIwMjA0NC40NDkzNTEsInN1YiI6IjY3MDI0MzZlMTU5MmVmMWJhOTg1N2M1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6z5IUyKCOl_hXkz6pCBcNp2RfL38hNQ0G5MrhrZDD4E'
  }
};



const handleWheel = (event) =>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel);
},[])

  return (
    <div className='tittle-cards'>
      <h2> {title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref ={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to ={`/player/${card.id}`} className="card" key={index}>
           <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
           <p>{card.original_title}</p>
          </Link>

        })}
      </div>
    </div>
  )
}

export default TittleCards
