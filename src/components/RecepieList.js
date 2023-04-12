import './RecepieList.css'

import { Link } from 'react-router-dom'

export default function RecepieList({ recipes }) {

    if (recipes.length === 0) {
        return <div className="error">No recipes to load...</div>
    }


    return(
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='card'>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <p>{recipe.method.substring(0, 100)}....</p>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                </div>
            ))} 
            
        </div>  
    )
}

