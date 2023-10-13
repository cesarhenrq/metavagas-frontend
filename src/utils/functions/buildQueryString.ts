import { Filters } from '@contexts/filters/dispatcher';

function buildQueryString(filters: Filters) {
  const params = new URLSearchParams();

  for (const key in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, key)) {
      const value = filters[key as keyof Filters];

      if (Array.isArray(value) && value.length > 0) {
        value.forEach(item => params.append(key, item));
      } else if (value !== '' && !Array.isArray(value)) {
        params.set(key, value);
      }
    }
  }

  return params.toString();
}

export default buildQueryString;
