export function apiLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "codenation" && email === "code@code") {
        resolve(true);
      }

      reject("Email ou password incorretos");
    }, 1000);
  });
}

export function apiLogout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

export default {
  apiLogin,
  apiLogout
};
