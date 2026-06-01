import './index.css'
import { useReducer, useEffect } from "react";
import Gallery from "./components/Gallery";
import { favouritesReducer } from "./reducers/favouritesReducer";

function App() {

  const [favourites, dispatch] =
    useReducer(
      favouritesReducer,
      [],
      () => {
        const stored =
          localStorage.getItem(
            "favourites"
          );

        return stored
          ? JSON.parse(stored)
          : [];
      }
    );

  useEffect(() => {
    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-4xl font-bold text-center mb-8">
          Photo Gallery
        </h1>

        <Gallery
          favourites={favourites}
          dispatch={dispatch}
        />

      </div>
    </div>
  );
}

export default App;
