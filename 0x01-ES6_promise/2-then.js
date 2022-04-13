/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
export default function handleResponseFromAPI(promise) {
  promise
    .then(function () {
      return { status: 200 };
    })
    .catch(function () {
      return Error();
    })
    .finally(function () {
      console.log('Got a response from the API');
    });
}
