import { useLocation } from "react-router-dom";

export const useSearchQuery = (key) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search, { ignoreQueryPrefix: true });
  if (key) {
    return query.get(key);
  }
  return query;
};
