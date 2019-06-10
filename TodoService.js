export default fetch => ({
  list: id => fetch(`/${id}/todo`, {method: 'GET'})
});
