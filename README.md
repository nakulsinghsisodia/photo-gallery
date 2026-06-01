# Photo Gallery App

A simple and responsive Photo Gallery web application built using React, Vite, and Tailwind CSS.

## Features

- Fetches 30 photos from the Picsum Photos API
- Displays photos in a responsive grid layout
- Search photos by author name in real-time
- Mark and unmark photos as favourites
- Favourites persist after page refresh using localStorage
- Loading and error handling states
- Custom Hook for fetching data
- useReducer for managing favourites state
- useCallback for search handler optimization
- useMemo for filtered photo list optimization

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript

## Installation

### Clone the repository

```bash
git clone https://github.com/nakulsinghsisodia/photo-gallery
```

### Navigate to the project directory

```bash
cd photo-gallery
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

## API Used

Picsum Photos API

```text
https://picsum.photos/v2/list?limit=30
```

## Project Structure

```text
src/
│
├── components/
│   ├── Gallery.jsx
│   └── PhotoCard.jsx
│
├── hooks/
│   └── useFetchPhotos.js
│
├── reducers/
│   └── favouritesReducer.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Functionality

### Photo Fetching
Photos are fetched from the Picsum Photos API using a custom hook called `useFetchPhotos`.

### Search
Users can search photos by author name. The filtering happens instantly without making additional API requests.

### Favourites
Users can mark photos as favourites using the heart button. Favourite photos are stored in localStorage and remain saved even after refreshing the page.

### Performance Optimization
- `useCallback` is used for the search input handler.
- `useMemo` is used to optimize filtering of photos.

## Author

Nakul Singh Sisodia
