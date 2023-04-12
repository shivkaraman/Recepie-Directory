// Styles 
import './App.css'

//Page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Recepie from './pages/recepie/Recepie'
import Create from './pages/create/Create'
import Search from './pages/search/Search'

import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar/>
				<Switch>
					<Route exact path='/'>
						<Home/>
					</Route>
					<Route path='/create'>
						<Create/>
					</Route>
					<Route path='/recipes/:id'>
						<Recepie/>
					</Route>
					<Route path='/search'>
						<Search/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App