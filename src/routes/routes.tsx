import { useContext } from "react";
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import { ProductsList } from "../components/productsList/ProductsList";
import { Favorites } from "../components/favorites/Favorites";
import { Home } from "../pages/Home";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { Details } from "../pages/Details";
import { CategoriesGetAll } from "../components/categories/CategoriesGetAll";
import { CategoryCreate } from "../components/categories/CategoryCreate";
import { ProductCreate } from "../components/productsList/ProductCreate";
import { Config } from "../components/configuration/Config";
import { ProductUpdate } from "../components/productsList/ProductUpdate";
import { CategoryOptions } from "../pages/CategoryOptions";
import { CategoryUpdate } from "../components/categories/CategoryUpdate";

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/productcreate" element={<ProductCreate />} />
      <Route path="/products" element={ <ProductsList /> } />
      <Route path="/updateproduct/:id" element={<ProductUpdate />}/>
      <Route path="/details/:id" element={ <Details /> } />
      <Route path="/categoryoption" element={<CategoryOptions />} />
      <Route path="/categorycreate" element={<CategoryCreate />} />
      <Route path="/categoryupdate/:id" element={<CategoryUpdate />} />
      <Route path="/categories" element={<CategoriesGetAll />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/config" element={<Config />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
