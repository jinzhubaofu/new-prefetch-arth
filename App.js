import React from 'react';
import UserService from './UserService';
import withService from './withService';

export function Foo(props) {
  return <div>{props.message}</div>;
}

Foo.prefetch = withService({
  user: UserService,
  todo: TodoService
})(async (services, request, extraData) => {
  const user = await services.user.info();
  const todos = await services.todos.list(user.id);
  return {
    user,
    todos,
  };
});
