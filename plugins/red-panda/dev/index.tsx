import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { redPandaPlugin, RedPandaPage } from '../src/plugin';

createDevApp()
  .registerPlugin(redPandaPlugin)
  .addPage({
    element: <RedPandaPage />,
    title: 'Root Page',
    path: '/red-panda'
  })
  .render();
