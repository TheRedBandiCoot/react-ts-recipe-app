import { useState, ReactNode, createContext, useContext, useEffect } from 'react';
import type { ModalIdType, ContextType } from '../utils/Types';

const AppContext = createContext<ContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context == null) {
    throw new Error('must not null');
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState(false);
  const [unmounted, setUnmounted] = useState(false);
  const [modalId, setModalId] = useState<ModalIdType['id']>('');
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getRecipes() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${
          import.meta.env.VITE_APP_ID
        }&app_key=${import.meta.env.VITE_API_KEY}`
      );
      const data = await res.json();
      setRecipes(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    search && getRecipes();
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        value,
        setValue,
        unmounted,
        setUnmounted,
        modalId,
        setModalId,
        search,
        setSearch,
        isLoading,
        recipes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
