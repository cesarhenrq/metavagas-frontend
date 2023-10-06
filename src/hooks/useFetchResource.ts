import { useEffect } from 'react';

const useFetchResource = (service: Service) => {
  useEffect(() => {
    service.get();
  }, []);
};

export default useFetchResource;
