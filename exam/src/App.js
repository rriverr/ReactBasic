import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import AddMovieForm from "./pages/AddMovieForm";
import MovieList from "./pages/MovieList";

function App() {
  const [movielist, setMovielist] = React.useState(DUMMY_MOVIE);

  const onSaveMovieData = (data) => {
    const movieData = {
      ...data,
    };
    setMovielist((prev) => {
      return [...prev, movieData];
    });
  };

  const delMovie = (idx) => {
    setMovielist((prev) => {
      prev.splice(idx, 1);
      return [...prev];
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <MovieList movielist={movielist} delMovie={delMovie} />,
        },
        {
          path: "/add",
          element: 
            <AddMovieForm
              movielist={movielist}
              onSaveMovieData={onSaveMovieData}
            />
          ,
        },
      ],
    },
    {},
  ]);

  return <RouterProvider router={router} />;
}

const DUMMY_MOVIE = [
  {
    id: 1,
    title: "Movie 1",
    genre: "Drama",
    release_date: "2022-01-01",
  },
  {
    id: 2,
    title: "Movie 2",
    genre: "Action",
    release_date: "2022-02-01",
  },
  {
    id: 3,
    title: "Movie 3",
    genre: "Comedy",
    release_date: "2022-03-01",
  },
];

export default App;
