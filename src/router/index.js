import Home from '@/pages/Home';
import CustomLayout from '@/components/CustomLayout';
import Services from '@/pages/Services';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';

import { Component } from 'react';

const routes = [
  {
    path: '/',
    Component: CustomLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'services',
        Component: Services,
      },
      {
        path: 'about-us',
        Component: AboutUs,
      },
      {
        path: 'contact',
        Component: Contact,
      },
    ],
  },
];

export default routes;
