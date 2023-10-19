import { useState, useEffect } from 'react';

const useFetchResource = <T>(
  service: Service<T>,
  dependencies: React.DependencyList = [],
) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoaded(false);
      await service.get();
      setIsLoaded(true);
    };
    fetch();
  }, dependencies);

  return isLoaded;
};

export default useFetchResource;
