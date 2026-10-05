import MovieItem from './MovieItem';

const MovieList = ({ movies, favorites, onToggleFavorite, onViewDetails }) => {
  if (movies.length === 0) {
    return <div className="no-movies">Không tìm thấy phim nào</div>;
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default MovieList;
