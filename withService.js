const bindServices = (fetch, services) => Object
  .keys(services)
  .reduces(
    (acc, key) => ({
      ...acc,
      [key]: services[key](fetch)
    }),
    {}
  );

export default services => prefetch => {
  return (fetch, request, extraData) => prefetch(
    bindServices(fetch, services),
    request,
    extraData
  );
};
