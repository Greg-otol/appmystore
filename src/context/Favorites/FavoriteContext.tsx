import React, { useState } from "react";
import { IProduct } from "../../interfaces/IProduct";

type BoxProps = {
    children: React.ReactNode;
  };

interface IfavoriteContext {
    favorites: IProduct[];
    setFavorites: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export const FavoriteContext = React.createContext<IfavoriteContext>({
    favorites: [],
    setFavorites: () => console.warn("setFavorites is not ready")
});

export const FavoriteProvider = ({children}: BoxProps) => {
    const [favorites, setFavorites] = useState<IProduct[]>([]);

    return (
        <FavoriteContext.Provider value={{
            favorites,
            setFavorites
        }}>
           {children}
        </FavoriteContext.Provider>
    );
}