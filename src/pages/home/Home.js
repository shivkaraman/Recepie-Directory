//Styles
import './Home.css';

//Components and hooks
import { useFetch } from '../../hooks/useFetch';
import RecepieList from '../../components/RecepieList'

export default function Home () {
    const { data,  isPending, error} = useFetch('http://localhost:3000/recipes')

    console.log(data);

    return (
        <div className='home'> 
            {isPending && <p className='loading'>Loading....</p>} 
            {error && <p className='error'>{error}</p>}
            {data && <RecepieList recipes={data} />} 
        </div>
    )
};
