import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize={14} p={2} rounded={8} colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
