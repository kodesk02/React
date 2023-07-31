import React ,{useState , useRef , useCallback}from 'react';
import useBookSearch from './useBookSearch';
import './App.css'


function App() {
  // Calling and setting state components
  const[query, setQuery] = useState('')
  const[pageNumber, setPageNumber] = useState(1)
  const {
    books,hasMore,loading,error
  }=
  useBookSearch(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node =>{
    if (loading) return 
    // we are disconnecting our observer cos we will reconnect it 
    if (observer.current) observer.current.disconnect()
    // The reconnecting of the disconnected observer 
    observer.current = new IntersectionObserver(entries =>{
      // Implementing the entries
      if (entries[0].isIntersecting && hasMore){
        setPageNumber(prevPageNumber  => prevPageNumber + 1)
      }
    })
    // This is to oobserve the current node 
    if (node) observer.current.observe(node)
  } , [loading, hasMore])

  function handleSearch(e){
    setQuery(e.target.value)
    setPageNumber(1)
  }

  // Calling the function

  return (
    <>
      <input type='text' value ={query} onChange={handleSearch}/>
      {books.map((book, index) =>{
        if (books.length === index + 1){
        return <div ref={lastBookElementRef} key={book}>{book}</div>
        }else {
        return <div key={book}>{book}</div>

        }
      })}
      <div>{loading && 'Loading please wait...'}</div>
      <div>{error && 'Error'}</div>
    </>
  )
}
export default App;
