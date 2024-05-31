import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const uploadUser = {};
  const photo = await uploadPhoto();
  const user = await createUser();

  uploadUser.photo = photo && user ? photo : null;
  uploadUser.user = user && photo ? user : null;
  return uploadUser;
}
