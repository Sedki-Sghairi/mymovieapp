import React from 'react';
import './App.css';
import SearchMovies from './SearchMovies';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div id="message" />
				<h1 className="title">My Movie App</h1>
				<SearchMovies />
			</div>
		);
	}
}

export default App;
