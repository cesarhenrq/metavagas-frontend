import { useState } from 'react';

import httpClient from '@services/httpClient';
import { AxiosError } from 'axios';

type Service = {
  get: () => Promise<void>;
};

const useResource = <T>(resouceUrl: string): [T[], Service] => {
  const [resources, setResources] = useState<T[]>([]);

  const get = async () => {
    try {
      const response = await httpClient.get<T[]>(resouceUrl);
      setResources(response.data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error('Failed to get resource', error);
      }
    }
  };

  const service: Service = {
    get,
  };

  return [resources, service];
};

export default useResource;
