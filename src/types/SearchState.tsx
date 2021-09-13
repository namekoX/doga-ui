import { Dispatch, SetStateAction } from "react";
import { Item } from "./GetIndexDataRes";

type SearchState = {
  q: string,
  setKeyword: Dispatch<SetStateAction<string>>,
  onSearch: () => void,
  errorMsg: string,
  items: Item[],
  value: number,
  setValue: Dispatch<SetStateAction<number>>,
  isLoading: boolean,
  order: string,
  setOrder: Dispatch<SetStateAction<string>>,
  kind: string,
  setKind: Dispatch<SetStateAction<string>>,
}
export default SearchState;