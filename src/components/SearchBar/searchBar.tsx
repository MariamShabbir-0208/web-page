// import React, { useContext } from 'react'
// import SearchIcon from "../../../public/searchicon.svg"
// import CrossIcon from "../../../public/cross_icon.png"
// import Image from 'next/image';

// const SearchBar = () => {
//     const{srach,setSearch,showSearch,setShowSearch}=useContext(shopContext);
//   return showSearch? (
// <div className='border-t border-b bg-gray-50 text-center'>
// <div className='inline-flex items-center justify-center border border-gray-400  px-5 py-5 py-2 my-5 mx-3  rounded-full w-3/4 sm:w-1/2'>
// <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search'/>
// <Image className='w-4' src={SearchIcon} alt=''/>
// </div>
// <Image onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={CrossIcon} alt=''/>
// </div>
    
    
//   )
// }

// export default SearchBar

import React, { useContext } from "react";
import SearchIcon from "../../../public/searchicon.svg";
import CrossIcon from "../../../public/cross_icon.png";
import Image from "next/image";
import { Shopcontext } from "@/context/shopcontext";

const SearchBar: React.FC = () => {
  const context = useContext(Shopcontext);

  if (!context) {
    throw new Error("SearchBar must be used within a ShopContextProvider");
  }

  const { search, setSearch, showSearch, setShowSearch } = context;

  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <Image className="w-4" src={SearchIcon} alt="Search Icon" />
      </div>
      <Image
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={CrossIcon}
        alt="Close Icon"
      />
    </div>
  ) : null;
};

export default SearchBar;
