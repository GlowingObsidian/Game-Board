import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: meh, boxSize: "25px" },
    4: { src: thumbsUp, alt: thumbsUp, boxSize: "25px" },
    5: { src: bullsEye, alt: bullsEye, boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} mt={2} />;
}

export default Emoji;
