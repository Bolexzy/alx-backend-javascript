export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    resolve(true);
    reject();
  });
  return promise;
}
