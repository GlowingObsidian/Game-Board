import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres } = useGenres();

  return (
    <ul style={{ padding: "20px" }}>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
