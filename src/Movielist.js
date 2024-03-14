import React from 'react';
import MovieCard from './Moviecard';



const MovieList = ({ movies }) => {
    // Vérifier si movies est défini et est un tableau
    if (!movies || !Array.isArray(movies)) {
        // Gérer le cas où movies n'est pas défini ou n'est pas un tableau
        return <div>Aucun film disponible</div>;
    }

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.title} description={movie.description} posterURL={movie.posterURL} note={movie.note} />

            ))
            }
        </div>
    );
};



export default MovieList;
