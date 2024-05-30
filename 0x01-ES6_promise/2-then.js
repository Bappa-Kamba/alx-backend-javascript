export default function handleResponseFromAPI(promise) {
  promise
    .then((result) => ({ code : 200, body : 'success' }))
    .catch(() => {return new Error();})
    .finally(() => console.log('Got a response from the API'));
  return promise;
}
