import * as network from './network';

export const withNetwork = api => fetch => {
  return api(
    Object.keys(network).reduce(
      (acc, key) => ({
        ...acc,
        [key]: network[key](fetch)
      }),
      {}
    )
  );
};
