import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav" bg="coral">
        In nav area
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          In aside area
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        In main area
      </GridItem>
    </Grid>
  );
}

export default App;
