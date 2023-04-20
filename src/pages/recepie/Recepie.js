//Styles
import './Recepie.css';

import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export default function Recepie () {
    const { id } = useParams();
    const url = 'http://localhost:3000/recipes/' + id
    const {data: recipe, isPending, error } = useFetch(url)

    const { mode } = useTheme()

    return (
        <div className={`recipe ${mode}`}>  
            {isPending && <p className='loading'>Loading...</p>}
            {error && <p className='error'>{error}</p>}
            {recipe && (
                <>
                    <h2 className={`page-title ${mode}`}>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </div>
    )
};

