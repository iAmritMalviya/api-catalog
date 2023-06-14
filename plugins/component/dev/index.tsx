import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { componentPlugin, ComponentPage } from '../src/plugin';

createDevApp()
  .registerPlugin(componentPlugin)
  .addPage({
    element: <ComponentPage />,
    title: 'Root Page',
    path: '/component'
  })
  .render();
