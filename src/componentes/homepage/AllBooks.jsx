import React, { use } from 'react'

const booksPromise = fetch("/booksData.json").then((res) => res.json())

const AllBooks = () => {
    const books = use(booksPromise);
    console.log("books", books);
    
  return (
    <div>AllBooks</div>
  )
}

export default AllBooks