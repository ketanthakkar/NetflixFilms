import Content from './components/Content';
import PageNotFound from './components/PageNotFound';
import Movie from './components/Movie';

export default [
  {
    path: '/',
    exact: true,
    component: Content,
  },
  {
    path: '/search/:query',
    exact: true,
    component: Content,
  },
  {
    path: '/film/:id',
    exact: true,
    component: Movie,
  },
  {
    path: '/*',
    component: PageNotFound,
  }
];
