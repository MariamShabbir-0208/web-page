// import React, { createContext, useState } from 'react'

// export const Shopcontext= createContext();

// const ShopContextProvider = () => {

//     const [search,setSearch]=useState('');
//     const [showSearch,setShowSearch]=useState(false);

//   return (
//     <Shopcontext.Provider value={value}>
//         {props.children}
//     </Shopcontext.Provider>
//   )
// }

// export default ShopContextProvider;

import React, { createContext, useState, ReactNode } from "react";

export const Shopcontext = createContext<{
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const value = { search, setSearch, showSearch, setShowSearch };

  return <Shopcontext.Provider value={value}>{children}</Shopcontext.Provider>;
};

export default ShopContextProvider;

