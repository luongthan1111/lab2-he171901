const MovieItem = ({ movie, isFavorite, onToggleFavorite, onViewDetails }) => {
  return (
    <div className="movie-item">
      <div className="movie-info">
        <h3 className="movie-title">
          <span className={`movie-star ${isFavorite ? 'favorited' : ''}`}>
            {isFavorite ? '★' : '☆'}
          </span>
          {movie.title}
        </h3>
        <div className="movie-details">
          <span className="movie-genre">{movie.genre}</span>
          <span className="movie-year">{movie.year}</span>
          <span className="movie-rating">{movie.rating}</span>
        </div>
      </div>
      <div className="movie-actions">
        <button
          onClick={() => onToggleFavorite(movie.id)}
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
        >
          {isFavorite ? 'Bỏ thích' : 'Yêu thích'}
        </button>
        <button
          onClick={() => onViewDetails(movie)}
          className="details-btn"
        >
          Chi tiết
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
