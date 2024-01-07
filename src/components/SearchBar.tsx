import { FormEvent, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import type { SearchBarType } from '../utils/Types';

const SearchBar = ({ marginRight, setSearch }: SearchBarType) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    inputRef.current?.value;
    if (typeof inputRef.current?.value === 'string' && setSearch) {
      setSearch(inputRef.current.value);
      inputRef.current.value = '';
    }
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
