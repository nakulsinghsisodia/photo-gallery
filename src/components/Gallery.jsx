import { useState, useCallback, useMemo } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";

function Gallery({
  favourites,
  dispatch,
}) {
  const {
    photos,
    loading,
    error,
  } = useFetchPhotos();

  const [search, setSearch] =
    useState("");

  // useCallback
  const handleSearch =
    useCallback((e) => {
      setSearch(e.target.value);
    }, []);

  // useMemo
  const filteredPhotos =
    useMemo(() => {
      return photos.filter((photo) =>
        photo.author
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );
    }, [photos, search]);

  if (loading) {
  return (
    <div className="flex justify-center mt-10">
      <div
        className="
          h-12
          w-12
          animate-spin
          rounded-full
          border-4
          border-gray-300
          border-t-blue-500
        "
      />
    </div>
  );
}

  if (error) {
    return (
      <div className="text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={handleSearch}
        className="
          w-full
          p-3
          mb-6
          border
          rounded-lg
          bg-white
        "
      />

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >
        {filteredPhotos.map(
          (photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              favourites={favourites}
              dispatch={dispatch}
            />
          )
        )}
      </div>
    </>
  );
}

export default Gallery;