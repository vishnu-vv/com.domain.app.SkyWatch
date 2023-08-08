import { Utils } from '@lightningjs/sdk'
import Page from './Page'

export default class NewsDetail extends Page {
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
        Content: {
          x: 25,
          w: 1920,
          h: 1080,
          scaleX: 0.9,
          rect: true,
          color: 0x00000000,
          Title: {
            mountX: 0,
            y: 200,
            text: {
              fontFace: 'Regular',
              fontSize: 56,
            },
          },
          Description: {
            mountX: 0,
            y: 300,
            text: {
              width: 1000,
              fontFace: 'Regular',
              fontSize: 32,
            },
          },
        },
      },
    }
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
