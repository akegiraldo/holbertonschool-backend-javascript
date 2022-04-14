import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      if (values[0].status === 'fulfilled' && values[1].status === 'fulfilled') {
        console.log(values[0].body, values[1].firstName, values[1].lastName);
        return;
      }
      throw Error();
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
