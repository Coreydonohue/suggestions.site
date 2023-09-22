import React from 'react'
import { useGetMoviesQuery } from '../reducers/api';
import MovieCard from '../components/cards/MovieCard';



const Movies = () => {
    const {data, isLoading} = useGetMoviesQuery(); 

  return (
    <div>
      {isLoading? <h1>Loading...</h1>: (
        <div> 
          {data.map((movie) => (
            <MovieCard 
            key={movie.id}
            rank={movie.rank}
            title={movie.title}
            director={movie.director}
            genre={movie.genre}
            description={movie.description}
            /> 
          ))}
        </div>
      )
           

            }
    </div>
  )
}

export default Movies
