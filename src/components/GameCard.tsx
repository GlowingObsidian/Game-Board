import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card overflow="hidden">
      <Image
        src={getCroppedImageUrl(game.name, game.background_image, 600, 400)}
        objectFit="contain"
      ></Image>
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIcons>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
