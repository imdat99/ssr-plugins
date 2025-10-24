import { createElement as _c } from 'react';
import { Outlet, redirect, type RouteObject } from 'react-router';
const routes: RouteObject[] = [
  {
    ErrorBoundary: () => _c('div', { className: 'p-6' }, 'Something went wrong!'),
    HydrateFallback: () => _c('div', { className: 'p-6' }, 'Loading...'),
    lazy: async () => ({
        Component: (await import('./root')).default,
    }),
    children: [
      {
        path: "",
        Component: Outlet,
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('./home')).default,
            }),
          },
        ]
      },
      {
        path: '*',
        Component: () => _c('div', { className: 'p-6' }, '404 Not Found'),
      },
    ],
  },
];
export default routes;
