import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="3xl" my={2}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} p={1}>
            <HStack spacing={2}>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(
                  genre.name,
                  genre.image_background,
                  600,
                  400
                )}
                objectFit="cover"
                rounded="lg"
              />
              <Button
                m={0}
                p={0}
                fontSize="md"
                fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"}
                variant="text"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
