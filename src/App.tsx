import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import HomeLayout from './components/HomeLayout';
import { Search } from './pages/Search';
import RecipePage from './pages/RecipePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path=":id" element={<RecipePage />} />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
