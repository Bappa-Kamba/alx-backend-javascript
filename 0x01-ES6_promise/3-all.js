import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const profileData = Promise.all([uploadPhoto(), createUser()]);

  profileData.then((values) => {
    if (values) {
      const profileDetails = [];
      profileDetails.push(values[0].body);
      profileDetails.push(values[1].firstName);
      profileDetails.push(values[1].lastName);
      console.log(profileDetails.join(' '));
    } else {
      throw new Error('Signup system offline');
    }
  }).catch((error) => console.log(error));

  return profileData;
}
