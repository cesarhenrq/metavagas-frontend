export type Action = {
  type: string;
  payload: User;
};

export const setUser = (user: User) => {
  localStorage.setItem('metavagas-user', JSON.stringify(user));
  return {
    type: 'SET_USER',
    payload: user,
  };
};

export const removeUser = () => {
  localStorage.removeItem('metavagas-user');
  return {
    type: 'REMOVE_USER',
    payload: null,
  };
};
