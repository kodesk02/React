import {useEffect, useState} from 'react'
import axios from 'axios';

function useBookSearch(query, pageNumber) {
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(false)
    const[books, setBooks] = useState([])
    const[hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setBooks([])
    },[query])

    useEffect (() =>{
    // Everytime we make a request
    setLoading(true)
    setError(false)

    let cancel
    axios({
        method: 'GET',
        url: 'http://openlibrary.org/search.json',
        params: {q: query, page: pageNumber},
        // To cancel duplication or calling query multiple times
        cancelToken: new axios.CancelToken(c => cancel = c)
        // .then function brings about the response from the search
    }).then(res =>{
        setBooks(prevBooks =>{
            // returning previous books and current books which is res.data.docs then the .map is to go to just the title of the books
            // Set returns a unique value as an array
            return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
        })
        // Means no more data is available
        setHasMore(res.data.docs.length > 0)
        // Means loading is no longer needed after no more data is available
        setLoading(false)
        // .catch e is to catch the error
    }).catch(e =>{
        // Ignore any cancel request cos it is intentional
        if (axios.isCancel(e)) return
        setError(true)
    })
    return () =>cancel()

},[query, pageNumber])

return {loading, error, hasMore, books}
}

export default useBookSearch