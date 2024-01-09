import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../utils/api';

const RecipePage = () => {
  const { id } = useParams() as { id: string };
  const { data, isError, isPending, isLoading } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => API_URL(id),
    gcTime: 0,
  });

  if (isLoading) return <h1 className="font-bold text-3xl">Loading...</h1>;
  if (isError) return <h1 className="font-bold text-3xl">An error has occurred</h1>;

  return (
    <main className="main-container h-[calc(100vh-9rem)!important]">
      <header className="home-header">
        <h1 className="font-bold text-3xl">{data?.hits[0].recipe.label}</h1>
      </header>
      <div className="container--food w-full h-full">
        <div className="branding  w-[calc(20%-1rem)!important]">
          <img src={data?.hits[0].recipe.image} />
        </div>
      </div>
    </main>
  );
};

export default RecipePage;
