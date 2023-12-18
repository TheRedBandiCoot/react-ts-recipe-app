import SearchBar from '../components/SearchBar';

export const Search = () => {
  return (
    <div className="w-screen flex items-center justify-center flex-col mt-7">
      <p className="text-3xl font-bold underline">Search Here</p>
      <SearchBar marginRight="0" />
    </div>
  );
};
