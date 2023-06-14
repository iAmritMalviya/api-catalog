import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const componentPlugin = createPlugin({
  id: 'component',
  routes: {
    root: rootRouteRef,
  },
});

export const ComponentPage = componentPlugin.provide(
  createRoutableExtension({
    name: 'ComponentPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
