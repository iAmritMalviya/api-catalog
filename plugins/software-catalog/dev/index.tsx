import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { softwareCatalogPlugin, SoftwareCatalogPage } from '../src/plugin';

createDevApp()
  .registerPlugin(softwareCatalogPlugin)
  .addPage({
    element: <SoftwareCatalogPage />,
    title: 'Root Page',
    path: '/software-catalog'
  })
  .render();
