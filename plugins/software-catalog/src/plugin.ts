import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const softwareCatalogPlugin = createPlugin({
  id: 'software-catalog',
  routes: {
    root: rootRouteRef,
  },
});

export const SoftwareCatalogPage = softwareCatalogPlugin.provide(
  createRoutableExtension({
    name: 'SoftwareCatalogPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
