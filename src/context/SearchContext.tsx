import { createContext} from 'react'
import SearchState from '../types/SearchState';


export const SearchContext = createContext<SearchState | undefined>(undefined);