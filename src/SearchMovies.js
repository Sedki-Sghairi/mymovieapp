import React, { useState } from 'react';
import MovieCard from './MovieCard';
export default function SearchMovies() {
	const [ movie, setMovie ] = useState('');
	const [ movieUi, setMovieUi ] = useState([]);
	const x = process.env.REACT_APP_MY_KEY;
	const searchMovies = async (e) => {
		e.preventDefault();

		const url = `https://api.themoviedb.org/3/search/movie?api_key=${x}&language=en-US&query=${movie}&page=1&include_adult=false`;
		try {
			const res = await fetch(url);
			const data = await res.json();

			if (data.total_results === 0) {
				document.getElementById('message').innerText = "sorry we couldn't find your movie!";
				setTimeout(() => (document.getElementById('message').innerText = ''), 3000);
			}
			setMovieUi(data.results);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<form className="form" onSubmit={searchMovies}>
				<label className="label" htmlFor="movie">
					enter movie name
				</label>
				<input
					className="input"
					type="text"
					name="movie"
					placeholder="i.e. Interstellar "
					value={movie}
					onChange={(e) => setMovie(e.target.value)}
				/>
				<button className="button" type="submit">
					Search
				</button>
			</form>
			<div className="card-list">
				{movieUi !== undefined ? (
					movieUi
						.filter((movie) => movie.backdrop_path)
						.map((movie) => <MovieCard movie={movie} key={movie.id} />)
				) : (
					<div class="message">please enter a valid name</div>
				)}
			</div>
		</div>
	);
}
