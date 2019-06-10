import {addQuery} from './url';

export const get = (fetch) => async (url, query = {}) => {
  const res = await fetch(query ? addQuery(url, query) : url);
  const {status, message, data} = await res.json();
  if (data.status !== 0) {
    throw new Error(message || `biz error: ${status}`);
  }
  return data;
};

export const patch = fetch => async (url, partials) => {
  const res = await fetch(
    query ? addQuery(url, query) : url,
    {
      method: 'PATCH',
      body: JSON.stringify(partials)
    }
  );
  const {status, message, data} = await res.json();
  if (data.status !== 0) {
    throw new Error(message || `biz error: ${status}`);
  }
  return data;
};
