import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Router>
				<Link>
					<Route exact path='/' />
					<Login />
					<Route />
				</Link>
			</Router>
		</div>
	)
}

export default App
