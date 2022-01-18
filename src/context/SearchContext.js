import { createContext } from "react";

export const SearchContext = createContext({
    termRef: "",
    handleSearch: () => {}
});