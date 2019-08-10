import { localStorageWrapper } from "../helpers";
import { isLogged, getUser } from "./loginService";

const NAMESPACE = "comments";

const commentsService = {
  insert: (recipeSlug, comment) => {
    if (!isLogged) {
      throw new Error("User not logged");
    }

    const comments = localStorageWrapper.get(NAMESPACE) || {};
    comments[recipeSlug] = (comments[recipeSlug] || []).concat({
      ...comment,
      author: getUser().username,
      date: +new Date()
    });

    localStorageWrapper.set(NAMESPACE, comments);
    return true;
  },
  get: recipeSlug =>
    (localStorageWrapper.get(NAMESPACE) || {})[recipeSlug] || [],
  delete: (recipeSlug, target) => {
    if (!isLogged) {
      throw new Error("User not logged");
    }

    const comments = localStorageWrapper.get(NAMESPACE) || {};
    comments[recipeSlug] = (comments[recipeSlug] || []).filter(
      comment => target.date !== comment.date
    );
    localStorageWrapper.set(NAMESPACE, comments);
    return true;
  }
};

export default commentsService;
