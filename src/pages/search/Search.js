//Styles
import './Search.css';

import { useFetch } from '../../hooks/useFetch';
import { useLocation  } from 'react-router-dom';

import RecepieList from '../../components/RecepieList';

export default function Search () {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get("q")

    const url = 'http://localhost:3000/recipes?q=' + query
    const { data, isPending, error } = useFetch(url)

    return (
        <div>
            <h2 className="page-title">Recipes including "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecepieList recipes={data} />}
        </div>
    )
};
