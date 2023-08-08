import { Utils, Lightning } from '@lightningjs/sdk'

export default class Page extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  fetchNewsData() {}

  pageTransition() {
    return 'crossFade'
  }
}
