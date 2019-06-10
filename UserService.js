import withNetwork from './withNetwork';

export default fetch => ({
  get: id => fetch(`/user/${id}`),
  update: (id, partials) => fetch(
    `/user/${id}`,
    {
      methods: 'PATCH', body: JSON.stringify(partials)
    }
  )
});


export default withNetwork(({get, patch}) => ({
  get: id => get(`/user/${id}`),
  update: (id, partials) => patch(`/user/${id}`, partials)
}));
