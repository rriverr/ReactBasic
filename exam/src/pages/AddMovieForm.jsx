import React from "react";

const AddMovieForm = (props) => {
  const [id, setId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [date, setDate] = React.useState("");

  const idChangeHandler = (e) => {
    setId(e.target.value);
  };
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const genreChangeHandler = (e) => {
    setGenre(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (id !== "" && title !== "" && genre !== "" && date !== "") {
      for (let i = 0; i < props.movielist.length; i++) {
        if (props.movielist[i].id.toString() === id) {
          alert("이미 존재하는 id입니다.");
          return;
        }
      }
      const data = {
        id: id,
        title: title,
        genre: genre,
        date: new Date(date),
      };

      props.onSaveMovieData(data);
      console.log(data);
      setId("");
      setTitle("");
      setGenre("");
      setDate("");
    } else {
      alert("빈칸을 모두 채워주세요.");
    }
  };

  return (
    <React.Fragment>
      <h1>Create Movie</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            value={id}
            placeholder="input movie id"
            onChange={idChangeHandler}
          />
        </div>
        <div>
          <input
            value={title}
            placeholder="input movie title"
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <input
            value={genre}
            placeholder="input movie genre"
            onChange={genreChangeHandler}
          />
        </div>
        <div className="date">
          <label>출시일 : </label>
          <input value={date || ""} type="date" onChange={dateChangeHandler} />
        </div>
        <div>
          <button type="submit">Add Movie</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddMovieForm;
