import Home from './pages/Home'
import Movies from './pages/Movies'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import moviesProvider from './api/providers/movies'
import { newsListProvider, newsDetailProvider } from './api/providers/news'
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
    {
      path: 'news',
      component: News,
      before: newsListProvider,
    },
    {
      path: 'news/:id',
      component: NewsDetail,
      before: newsDetailProvider,
    },
  ],
}
