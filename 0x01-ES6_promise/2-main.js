import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
const res = handleResponseFromAPI(promise);
res.then((value) => console.log(value));
