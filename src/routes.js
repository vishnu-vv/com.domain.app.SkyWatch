import Home from './pages/Home'
import Movies from './pages/Movies'

export const routes = {
  root: 'home',
  routes: [
    {
      path: 'home',
      component: Home,
    },
    {
      path: 'movies',
      component: Movies,
    },
  ],
}
