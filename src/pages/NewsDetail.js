import { Utils, Lightning } from '@lightningjs/sdk'

export default class NewsDetail extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
        Content: {
          x: 100,
          w: 1720,
          h: 880,
          rect: true,
          color: 0x00000000,
          Title: {
            mountX: 0,
            y: 200,
            text: {
              fontFace: 'Regular',
              fontSize: 48,
            },
          },
          Description: {
            mountX: 0,
            y: 300,
            text: {
              fontFace: 'Regular',
              fontSize: 32,
            },
          },
        },
      },
    }
  }

  _init() {
    this.index = 0
  }

  _onDataProvided() {
    this.tag('Title').text = this.data.title
    this.tag('Description').text = this.data.description
  }

  fetchNewsData() {}

  _getFocused() {
    return this
  }
}
