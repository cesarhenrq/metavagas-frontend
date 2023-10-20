import { useState } from 'react';

import httpClient from '@services/httpClient';
import { AxiosError } from 'axios';

type ResourceResponse<T> = T extends Vacancy
  ? { vacancies: T[]; count: number }
  : T[];

const useResource = <T>(resouceUrl: string): [T[], Service<T>, number] => {
  const [resources, setResources] = useState<T[]>([]);
  const [count, setCount] = useState<number>(0);

  const get = async () => {
    try {
      const response = await httpClient.get<ResourceResponse<T>>(resouceUrl);

      if ('vacancies' in response.data) {
        setResources(response.data.vacancies);
        setCount(response.data.count);
      } else {
        setResources(response.data);
      }
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

  return [resources, service, count];
};

export default useResource;
