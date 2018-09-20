import React from 'react';
import { Switch } from 'react-router';
import AppRoute from '@/ui/app/AppRoute';

import UserListPage from '@/ui/user/list/UserListPage';

export default () => (
  <Switch>
    <AppRoute exact path='/' component={UserListPage} />
    <AppRoute exact path='/users' component={UserListPage} />
  </Switch>
);
