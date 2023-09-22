import React from 'react'
import { useGetBooksQuery, useAddBookMutation, useDeleteBookMutation } from '../reducers/api'
import BookCard from '../components/cards/BookCard';



const Books = () => {
    const {data, isLoading} = useGetBooksQuery(); 
    const [deleteBook] = useDeleteBookMutation(); 
    const [addBook] = useAddBookMutation(); 

  return (
    <div>
      {isLoading? <h1>Loading...</h1>: (
        <div> 
          {data.map((book) => (
            <BookCard 
            key={book.id}
            rank={book.rank}
            title={book.title}
            author={book.author}
            description={book.description}
            /> 
          ))}
        </div>
      )
           

            }
    </div>
  )
}

export default Books
