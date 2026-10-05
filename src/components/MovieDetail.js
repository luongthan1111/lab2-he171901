const MovieDetail = ({ movie, onBack, isFavorite, onToggleFavorite }) => {
  return (
    <div className="movie-detail">
      <button onClick={onBack} className="back-btn">← Quay lại</button>
      <div className="detail-content">
        <h2 className="detail-title">{movie.title}</h2>
        <div className="detail-info">
          <p><strong>Thể loại:</strong> {movie.genre}</p>
          <p><strong>Năm:</strong> {movie.year}</p>
          <p><strong>Đánh giá:</strong> ⭐ {movie.rating}</p>
          <p><strong>Đạo diễn:</strong> {movie.director}</p>
          <p><strong>Thời lượng:</strong> {movie.duration} phút</p>
          <p><strong>Mô tả:</strong> {movie.description}</p>
        </div>
        <button
          onClick={onToggleFavorite}
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
        >
          {isFavorite ? 'Bỏ thích' : 'Yêu thích'}
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
