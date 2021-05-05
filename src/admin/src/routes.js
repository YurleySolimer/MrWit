import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/index'));
const Users = React.lazy(() => import('./views/users/index'));
const Consults = React.lazy(() => import('./views/consults/index'));
const Operations = React.lazy(() => import('./views/operations/index'));
const Blog = React.lazy(() => import('./views/blog/index'));
const NewEntry = React.lazy(() => import('./views/blog/NewEntry'));
const Faq = React.lazy(() => import('./views/faq/index'));
const NewEntryFaq = React.lazy(() => import('./views/faq/NewEntry'));
const Team = React.lazy(() => import('./views/team/index'));
const NewMember = React.lazy(() => import('./views/team/NewMember'));

const routes = [
  { path: '/', exact: true, name: 'Inicio', component: Dashboard, exact: true },
  { path: '/usuarios', name: 'Usuarios', component: Users, exact: true },
  { path: '/consultas', name: 'Consultas', component: Consults },
  { path: '/operaciones', name: 'Operaciones', component: Operations },
  { path: '/blog', name: 'Blog', component: Blog, exact: true },
  { path: '/blog/nueva', name: 'Blog', component: NewEntry, exact: true },
  { path: '/faq', name: 'FAQ', component: Faq, exact: true },
  { path: '/faq/nueva', name: 'FAQ', component: NewEntryFaq, exact: true },
  { path: '/equipo', name: 'Equipo', component: Team, exact: true },
  { path: '/equipo/nuevo', name: 'Equipo', component: NewMember, exact: true },
];

export default routes;
