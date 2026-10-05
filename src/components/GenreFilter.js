const GenreFilter = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="filter-container">
      <label className="controls-label">Thể loại:</label>
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="genre-select"
      >
        {genres.map(genre => (
          <option key={genre} value={genre}>
            {genre === 'All' ? 'Tất cả' : genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
