import Item from './Item';

interface GenresListProps {
  genresData: string[];
}

const GenresList = ({ genresData }: GenresListProps) => {
  if (!genresData.length) return <h3>No genres info avalaible</h3>;

  return (
    <>
      {genresData.map((genre) => (
        <Item key={genre} name={genre} />
      ))}
    </>
  );
};

export default GenresList;
