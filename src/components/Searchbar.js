import './Searchbar.css'

import { useState } from "react"
import { useHistory } from "react-router-dom";

export default function Searchbar () {
    const [query, setQuery] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`/search?q=${query}`)
    }

    return(
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    id='search'
                    onChange={(e) => setQuery(e.target.value)}
                    required
                ></input>
            </form>
        </div>
    )
}