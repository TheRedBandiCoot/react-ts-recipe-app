import { FormEvent, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import type { SearchBarType } from '../utils/Types';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ marginRight, setSearch }: SearchBarType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    inputRef.current?.value;
    if (typeof inputRef.current?.value === 'string' && setSearch) {
      setSearch(inputRef.current.value);
      inputRef.current.value = '';
    }
    navigate('/');
  }

  function handleSearchClick() {
    inputRef.current?.focus();
  }

  return (
    <nav className="nav" style={{ marginRight }}>
      <i onClick={handleSearchClick}>
        <FaSearch />
      </i>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Search here" />
        <button type="submit">search</button>
      </form>
    </nav>
  );
};

export default SearchBar;
