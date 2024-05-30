import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const profileData = Promise.all([uploadPhoto(), createUser()]);
  profileData.then((values) => {
    const profileDetails = [];
    profileDetails.push(values[0].body);
    profileDetails.push(values[1].firstName);
    profileDetails.push(values[1].lastName);
    console.log(profileDetails.join(' '));
  })
    .catch(console.log('Signup system offline'));
  return profileData;
}
