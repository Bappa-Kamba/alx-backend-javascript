export default function uploadPhoto(fileName) {
  const photo = Promise.reject(new Error(`${fileName} cannot be processed`));
  photo.catch((error) => console.error(error));
  return photo;
}
