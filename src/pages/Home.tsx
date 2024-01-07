import { useAppContext } from '../components/AppProvider';
import HomeRecipesSection from '../components/HomeRecipesSection';

function Home() {
  const { recipes, search, isLoading } = useAppContext();

  if (isLoading) return <h1 className="font-bold text-3xl">Loading...</h1>;

  return (
    <main className="main-container">
      {recipes && (
        <header className="home-header">
          <h1 className="font-bold text-3xl">
            {recipes.hits.length} Search Results for {search}
          </h1>
        </header>
      )}
      <HomeRecipesSection />
    </main>
  );
}

export default Home;
