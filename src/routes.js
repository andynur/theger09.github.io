import React from 'react';
import Loadable from 'react-loadable'

import App from './components/App/App';

function Loading() {
    return <div>Loading...</div>;
}

const Home = Loadable({
  loader: () => import('./components/Page/Home'),
  loading: Loading
});

const About = Loadable({
  loader: () => import('./components/Page/About'),
  loading: Loading
});

const Resume = Loadable({
  loader: () => import('./components/Page/Resume'),
  loading: Loading
});

const Portfolio = Loadable({
  loader: () => import('./components/Page/Portfolio'),
  loading: Loading
});

const Contact = Loadable({
  loader: () => import('./components/Page/Contact'),
  loading: Loading
});

const routes = [
  { path: '/', exact: true, name: 'Default', component: App },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/resume', name: 'Resume', component: Resume },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contact', name: 'Contact', component: Contact }
];

export default routes