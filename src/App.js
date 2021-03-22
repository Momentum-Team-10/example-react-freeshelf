import React from 'react'
import './App.css'
import books from './books'
import Book from './components/Book'

function App() {
  return (
    <div className="App">
      <h1>Freeshelf</h1>
      {books.map((book) => (
        <Book book={book} key={book.url} />
      ))}
    </div>
  )
}

export default App
