import { PATH_PAGE } from './paths';
import React, { lazy } from 'react';
import {RoutesProps} from 'models/routes'
import GeneralPagesLayout from 'components/layouts/general-layout';


// ----------------------------------------------------------------------

const AppRoutes :RoutesProps = {
  path: PATH_PAGE.root,
  layout: GeneralPagesLayout,
  protected: false,
  routes: [
    {
      path: PATH_PAGE.root,
      component: lazy(() => import('screens/home'))
    },
    {
      path: PATH_PAGE.about,
      component: lazy(() => import('screens/about-the-creator'))
    },
    {
      path: PATH_PAGE.mirage.root,
      component: lazy(() => import('screens/about/index'))
    },
    {
      path: PATH_PAGE.mirage.instructions,
      component: lazy(() => import('screens/how-to-use'))
    },
    {
      path: PATH_PAGE.mirage.map.interactive,
      component: lazy(() => import('screens/interactive-map'))
    },
    {
      path: PATH_PAGE.mirage.map.static,
      component: lazy(() => import('screens/static-map'))
    },
    
  ]
};

export default AppRoutes;
