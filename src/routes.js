import Home from './pages/Home'
import Movies from './pages/Movies'
import moviesProvider from './api/providers/movies'
import api from './api'

export const routes = {
  root: 'home',
  boot: api.loadConfig,
  routes: [
    {
      path: 'home',
      component: Home,
    },
    {
      path: 'movies',
      component: Movies,
      before: moviesProvider,
    },
  ],
}
