import { useEffect } from 'react';

const useFetchResource = <T>(service: Service<T>) => {
  useEffect(() => {
    service.get();
  }, []);
};

export default useFetchResource;
