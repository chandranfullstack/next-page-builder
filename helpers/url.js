const standaloneServerPort =3000 ;

export const getBaseUrl = (standaloneServer) => {
  return standaloneServer ? `http://localhost:${standaloneServerPort}` : "";
};
export const getImageUrl = (standaloneServer, imageSrc) => {
  const baseUrl = getBaseUrl(standaloneServer);
  return `${baseUrl}/api/builder/handle?type=asset&path=${imageSrc}`;
};