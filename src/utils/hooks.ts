import notFound from "../assets/logo/error.svg";

export const useUrl = (url: string) => {
  if (/undefined/.test(new URL(`../assets/${url}`, import.meta.url).href)) {
    return notFound;
  } else {
    return new URL(`../assets/${url}`, import.meta.url).href;
  }
};
