export type Action = {
  type: string;
  payload: string;
};

export const setQuery = (query: string) => {
  return {
    type: 'SET_QUERY',
    payload: query,
  };
};
