import React, { lazy, Suspense } from 'react';
import { Flex } from '@chakra-ui/core';
import { Switch, withRouter } from 'react-router';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { LoadingOverlay } from 'uikit/ReactTable/components';
import { useCheckIsLogin } from 'hooks';

const UserList = lazy(() => import('features/UserList'));
const Login = lazy(() => import('features/Login'));

const routes = [
  {
    path: '/login',
    component: Login,
    exact: false,
  },
  {
    path: '/user-list',
    component: UserList,
    exact: false,
  },
  {
    path: '/',
    exact: true,
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

const PrivateRoute = (props: RouteProps) => {
  const { ...restProps } = props;
  if (props.path !== '/login') {
    return <Redirect to="/login" />;
  } else return <Route {...restProps} />;
};

const RouteContainer = () => {
  const { isLogin } = useCheckIsLogin();
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <Switch>
        {routes.map((route, i) =>
          isLogin ? (
            route.path === '/' ? (
              <Redirect to="/user-list" key={i} />
            ) : (
              <Route key={i} path={route.path} component={route.component} />
            )
          ) : (
            <PrivateRoute
              key={i}
              path={route.path}
              component={route.component}
            />
          )
        )}
      </Switch>
    </Suspense>
  );
};

export default withRouter(RouteContainer);
