function PhotoCard({
  photo,
  favourites,
  dispatch,
}) {

  const isFavourite =
    favourites.includes(photo.id);

  const handleFavourite = () => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo.id,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">

      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-64 object-cover"
      />

      <div className="p-4 flex justify-between items-center">

        <h3 className="font-medium">
          {photo.author}
        </h3>

        <button
          onClick={handleFavourite}
          className="text-2xl"
        >
          {isFavourite
            ? "❤️"
            : "🤍"}
        </button>

      </div>
    </div>
  );
}

export default PhotoCard;