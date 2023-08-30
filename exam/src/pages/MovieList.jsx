import React from "react";

const MovieList = (props) => {
  const movies = props.movielist;
  const deleteMovie = (idx) => {
    props.delMovie(idx);
  };
  return (
    <React.Fragment>
      <h1>Movies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, idx) => {
            return (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.release_date}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteMovie(idx);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default MovieList;
