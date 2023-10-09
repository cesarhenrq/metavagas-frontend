import { useState } from 'react';

import httpClient from '@services/httpClient';
import { AxiosError } from 'axios';

const useResource = <T>(resouceUrl: string): [T[], Service<T>] => {
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

  const post = async (resource: T, token?: string | null) => {
    try {
      const response = await httpClient.post<T>(resouceUrl, resource, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw error;
      }
    }
  };

  const service: Service<T> = {
    get,
    post,
  };

  return [resources, service];
};

export default useResource;
