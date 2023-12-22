import { NavLink, Outlet } from 'react-router-dom';
import { IoFastFood } from 'react-icons/io5';
import SearchBar from './SearchBar';
import { useState } from 'react';

function HomeLayout() {
  const [search, setSearch] = useState('');

  return (
    <>
      <header className="home-layout--header">
        <NavLink to="/" data-text="RECIPE APP">
          <i>
            <IoFastFood />
          </i>
        </NavLink>
        <SearchBar marginRight="3.5rem" setSearch={setSearch} />
      </header>
      <Outlet context={{ search }} />
    </>
  );
}

export default HomeLayout;
