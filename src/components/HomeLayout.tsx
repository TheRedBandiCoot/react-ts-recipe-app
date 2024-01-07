import { NavLink, Outlet } from 'react-router-dom';
import { IoFastFood } from 'react-icons/io5';
import SearchBar from './SearchBar';
import { useAppContext } from './AppProvider';

function HomeLayout() {
  const { setSearch } = useAppContext();

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
      <Outlet />
    </>
  );
}

export default HomeLayout;
