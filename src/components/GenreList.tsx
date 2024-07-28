import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data } = useGenres();

  return (
    <ul style={{ padding: "20px" }}>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
