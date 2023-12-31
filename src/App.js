import { Utils, Router } from '@lightningjs/sdk'
import { routes } from './routes'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  _setup() {
    Router.startRouter(routes)
  }
}
