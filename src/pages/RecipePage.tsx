import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { RecipesType } from '../utils/Types';

const RecipePage = () => {
  const [recipe, setRecipe] = useState<RecipesType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();

  const API_URL = `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}&app_id=${
    import.meta.env.VITE_APP_ID
  }&app_key=${import.meta.env.VITE_API_KEY}`;

  async function getApi() {
    setIsLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    setRecipe(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getApi();
  }, []);

  if (isLoading) return <h1 className="font-bold text-3xl">Loading...</h1>;
  //   const {hits} = recipe;

  return (
    <main className="main-container h-[calc(100vh-9rem)!important]">
      <header className="home-header">
        <h1 className="font-bold text-3xl">{/* {recipe.label} */}</h1>
      </header>
      <div className="container--food w-full h-full">
        <div className="branding  w-[calc(20%-1rem)!important]">
          <img src={recipe?.hits[0].recipe.image} />
        </div>
      </div>
    </main>
  );
};

export default RecipePage;
