import { useEffect } from 'react';

const useFetchResouce = (service: Service) => {
  useEffect(() => {
    service.get();
  }, []);
};

export default useFetchResouce;
