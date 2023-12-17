import { NavLink, Outlet } from 'react-router-dom';
import { IoFastFood } from 'react-icons/io5';
import SearchBar from './SearchBar';

function HomeLayout() {
  return (
    <>
      <header className="home-layout--header">
        <NavLink to="/" data-text="RECIPE APP">
          <i>
            <IoFastFood />
          </i>
        </NavLink>
        <SearchBar marginRight="3.5rem" />
      </header>
      <Outlet />
    </>
  );
}

export default HomeLayout;
