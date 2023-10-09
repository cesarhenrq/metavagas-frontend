type Service<T> = {
  get: () => Promise<void>;
  post: (resource: T, token?: string | null) => Promise<T | undefined>;
};
