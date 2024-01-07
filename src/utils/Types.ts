export type Recipe = {
  label: string;
  image: string;
  ingredientLines: string[];
  uri: string;
};

export type RecipesType = {
  hits: Array<{ recipe: Recipe }>;
};

export type ModalIdType = {
  id?: string | number;
};

export type Modal = ModalIdType & { modalId?: ModalIdType['id'] } & Recipe;

export type ContextType = {
  value: boolean;
  setValue: (value: boolean) => void;
  unmounted: boolean;
  setUnmounted: (val: boolean) => void;
  modalId: ModalIdType['id'];
  setModalId: (val: ModalIdType['id']) => void;
  search: string;
  setSearch: (val: string) => void;
  isLoading: boolean;
  recipes?: RecipesType;
};

export interface SearchBarType {
  marginRight: string;
  setSearch?: (value: string) => void;
}
