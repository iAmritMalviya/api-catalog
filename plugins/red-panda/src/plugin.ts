import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const redPandaPlugin = createPlugin({
  id: 'red-panda',
  routes: {
    root: rootRouteRef,
  },
});

export const RedPandaPage = redPandaPlugin.provide(
  createRoutableExtension({
    name: 'RedPandaPage',
    component: () =>
      import('./components/KafkaDashboard').then(m => m.KafkaDashboard),
    mountPoint: rootRouteRef,
  }),
);
