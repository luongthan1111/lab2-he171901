import { useState, useMemo, useEffect } from 'react';
import { movies } from './datas/movies';
import { ThemeProvider, useTheme } from './context/ThemeContexr';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MoovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

function AppContent() {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('movie_favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movie_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const genres = ['All', ...new Set(movies.map(movie => movie.genre))];

  const filteredAndSortedMovies = useMemo(() => {
    let result = [...movies];

    if (searchTerm) {
      result = result.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedGenre !== 'All') {
      result = result.filter(movie => movie.genre === selectedGenre);
    }

    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'year') {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [searchTerm, selectedGenre, sortBy]);

  const toggleFavorite = (movieId) => {
    setFavorites(prev =>
      prev.includes(movieId)
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Header />

      <div className="controls">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="filter-sort-row">
          <GenreFilter
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />

          <div className="sort-container">
            <label className="controls-label">Sắp xếp:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="default">Mặc định</option>
              <option value="rating">Đánh giá</option>
              <option value="year">Năm</option>
              <option value="title">Tên</option>
            </select>
          </div>
        </div>
      </div>

      <div className="stats">
        <span>Tổng: {movies.length}</span>
        <span>Yêu thích: {favorites.length}</span>
        <span>Đang hiển thị: {filteredAndSortedMovies.length}</span>
      </div>

      {selectedMovie ? (
        <MovieDetail
          movie={selectedMovie}
          onBack={() => setSelectedMovie(null)}
          isFavorite={favorites.includes(selectedMovie.id)}
          onToggleFavorite={() => toggleFavorite(selectedMovie.id)}
        />
      ) : (
        <MovieList
          movies={filteredAndSortedMovies}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onViewDetails={setSelectedMovie}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
