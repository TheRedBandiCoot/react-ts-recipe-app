import { useEffect, useState } from 'react';
import { useAppContext } from '../components/AppProvider';
import { ModalBtn, Modal } from '../components/Modal';
import { NavLink, useOutletContext } from 'react-router-dom';

export type Recipe = {
  label: string;
  image: string;
  ingredientLines: string[];
  uri: string;
};

export type Users = {
  hits: Array<{ recipe: Recipe }>;
};

function randomizer() {
  const r = Math.floor(Math.random() * 256).toString();
  const g = Math.floor(Math.random() * 256).toString();
  const b = Math.floor(Math.random() * 256).toString();
  return `${r},${g},${b}`;
}
type HomeType = {
  search: string;
};

function Home() {
  const { value, modalId } = useAppContext();
  const [users, setUsers] = useState<Users | null>(null);
  const { search } = useOutletContext<HomeType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getApi() {
    setIsLoading(true);
    const res = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${
        import.meta.env.VITE_APP_ID
      }&app_key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await res.json();
    setUsers(data);
    setIsLoading(false);
  }
  useEffect(() => {
    search && getApi();
  }, [search]);

  if (isLoading) return <h1 className="font-bold text-3xl">Loading...</h1>;

  return (
    <>
      <main className="main-container">
        <header className="home-header">
          {users && <h1 className="font-bold text-3xl">{users.hits.length} Search Results</h1>}
        </header>
        <section>
          {users?.hits.map((user, i) => {
            const { recipe } = user;
            const [pre, id] = recipe.uri.split('#')[1].split('_');

            const imgLayoutStyle = {
              background: `linear-gradient(to bottom,transparent,rgba(${randomizer()},0.607)),linear-gradient(to left,transparent,rgba(${randomizer()},0.607))`,
            };
            return (
              <>
                <NavLink to={id} state={{ recipe, imgLayoutStyle }} key={i}>
                  <div className="container--food">
                    <div className="branding">
                      <img src={recipe.image} alt={recipe.label} />
                      <div
                        style={imgLayoutStyle}
                        className={`transition-all duration-500 ease-in-out img-layout absolute left-0 top-0 w-full h-full rounded-[10px] z-10 opacity-50  hover:opacity-20`}
                      />
                    </div>
                    <div className="info bg-transparent flex flex-col items-center justify-between  absolute w-full h-2/5 top-[56%]">
                      <h1 className="self-start text-2xl font-bold px-2 bg-transparent [display:-webkit-box] overflow-hidden [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                        {recipe.label}
                      </h1>
                      <div className="btn bg-transparent">
                        <ModalBtn id={recipe.label} />
                      </div>
                    </div>
                  </div>
                  {value && <Modal id={recipe.label} modalId={modalId} {...recipe} />}
                </NavLink>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;
