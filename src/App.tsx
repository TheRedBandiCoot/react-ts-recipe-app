import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeLayout from './components/HomeLayout';
import { Search } from './pages/Search';
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path=":id" element={<RecipePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
