import { FavoriteProvider } from "./context/Favorites/context/FavoriteContext";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
    <FavoriteProvider>
      <AppRoutes />
      </FavoriteProvider>
    </>
  );
}

export default App;
