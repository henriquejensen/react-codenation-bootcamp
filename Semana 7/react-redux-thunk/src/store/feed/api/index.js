const API_URL = "http://www.mocky.io/v2/5d608bbc2f000061005f3c85";

export function getTweet() {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(data);
  //   }, 1000);
  // });
  return fetch(API_URL).then(resp => resp.json());
}

export default {
  getTweet
};
