import React, { lazy, Suspense } from 'react';
import { Flex } from '@chakra-ui/core';
import { Switch, withRouter } from 'react-router';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { LoadingOverlay } from 'uikit/ReactTable/components';

const UserList = lazy(() => import('features/UserList'));

const routes = [
  {
    path: '/user-list',
    public: true,
    component: UserList,
    exact: false,
  },
  {
    path: '*',
    public: true,
    component: () => (
      <Flex>
        <div>Страница не найдена</div>
      </Flex>
    ),
    exact: false,
  },
];

const PublicRoute = (props: RouteProps) => {
  const { ...restProps } = props;

  return <Route {...restProps} />;
};

const RouteContainer = () => {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <Switch>
        {routes.map((route, i) => (
          <PublicRoute key={i} path={route.path} component={route.component} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default withRouter(RouteContainer);
