import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises)
    .then((results) => {
      const finalResult = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          finalResult.push(result);
        } else {
          finalResult.push({
            status: result.status,
            value: `Error: ${result.reason.message}`,
          });
        }
      });
      return finalResult;
    });
}
