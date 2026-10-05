import { useRef, useEffect } from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="search-container">
      <label className="controls-label">Tìm kiếm:</label>
      <input
        ref={inputRef}
        type="text"
        placeholder="Tìm tên phim..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
