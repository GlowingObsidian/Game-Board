const getCroppedImageUrl = (
  gamename: string,
  url: string,
  width: number,
  height: number
) => {
  if (!url) return "https://placehold.co/600x400?text=" + gamename;
  const index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
};

export default getCroppedImageUrl;
