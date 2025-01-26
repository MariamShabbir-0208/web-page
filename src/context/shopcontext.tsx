"use client";
import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { ProductsData } from "@/Data/dummy";

interface CartItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  quantity: number;
}

interface ShopContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchResults: typeof ProductsData;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  handleSearch: (searchTerm: string) => void;
}

export const Shopcontext = createContext<ShopContextType | null>(null);

export const useShopContext = () => {
  const context = useContext(Shopcontext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState(ProductsData);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Handle search functionality
  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
    if (!searchTerm.trim()) {
      setSearchResults(ProductsData);
      return;
    }

    const filtered = ProductsData.filter((product) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        product.title.toLowerCase().includes(searchLower) ||
        product.subtitle.toLowerCase().includes(searchLower)
      );
    });
    setSearchResults(filtered);
  };

  // Effect to handle search when search term changes
  useEffect(() => {
    handleSearch(search);
  }, [search]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      let numericPrice: number;
      if (typeof item.price === 'string') {
        const cleanPrice = item.price.replace(/[^\d.]/g, '');
        numericPrice = parseFloat(cleanPrice);
      } else {
        numericPrice = item.price;
      }
      
      if (isNaN(numericPrice)) {
        console.warn(`Invalid price format for item ${item.id}: ${item.price}`);
        return total;
      }
      
      return total + (numericPrice * item.quantity);
    }, 0);
  };

  return (
    <Shopcontext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        handleSearch
      }}
    >
      {children}
    </Shopcontext.Provider>
  );
};

export default ShopContextProvider;
