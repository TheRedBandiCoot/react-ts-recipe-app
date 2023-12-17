import { FormEvent, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
interface SearchBarType {
  marginRight: string;
}

const SearchBar = ({ marginRight }: SearchBarType) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
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
