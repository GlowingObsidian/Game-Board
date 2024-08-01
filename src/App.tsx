import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      letterSpacing={0.5}
    >
      <GridItem area="nav" p={5}>
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" p={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" p={5}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={setSelectedPlatform}
        ></PlatformSelector>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
