import { useContext } from 'react';

import { userContext } from '@contexts/user';

const useUser = () => {
  const user = useContext(userContext);

  return user;
};

export default useUser;
