import handleProfileSignup from './6-final-user';

const res = handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
res.then((results) => console.log(results));
