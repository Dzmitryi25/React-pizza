import {useState} from 'react'

function Search({searchAndFilter}){
    const [searchInput,setSearchInput] = useState('')
    searchAndFilter(searchInput)

    return(
       <input onChange={e=>setSearchInput(e.target.value)} value={searchInput} type="text" placeholder="Поиск..."/>
    )
}


export default Search;