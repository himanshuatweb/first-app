export const checkForImage = (url) => {
  if (!url) {
    return false;
  }
  let regex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;
  if (url.match(regex)) return true;
  return false;
};
