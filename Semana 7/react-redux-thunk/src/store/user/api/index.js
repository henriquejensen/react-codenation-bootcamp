export function apiLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

export default {
  apiLogin
};
