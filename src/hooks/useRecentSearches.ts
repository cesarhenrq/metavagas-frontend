import { useState, useEffect } from 'react';

const useRecentSearches = () => {
  const [recentSearches, setRecentSearch] = useState<string[] | null>(null);

  const addRecentSearch = (value: string) => {
    const recentSearches = localStorage.getItem('recentSearches');
    const recentSearchesArray = recentSearches
      ? JSON.parse(recentSearches)
      : [];

    if (recentSearchesArray.includes(value)) return;

    setRecentSearch([value, ...recentSearchesArray]);
    recentSearchesArray.unshift(value);
    localStorage.setItem('recentSearches', JSON.stringify(recentSearchesArray));
  };

  useEffect(() => {
    const recentSearchesJSON = localStorage.getItem('recentSearches');
    if (recentSearchesJSON) {
      setRecentSearch(JSON.parse(recentSearchesJSON));
    }
  }, []);

  useEffect(() => {
    recentSearches &&
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  return [recentSearches, addRecentSearch] as const;
};

export default useRecentSearches;
