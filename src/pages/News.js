import { Utils, Lightning } from '@lightningjs/sdk'

export default class News extends Lightning.Component {
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
      },
      Content: {
        x: 100,
        y: 100,
        w: 1720,
        h: 880,
        rect: true,
        color: 0x00000000,
        Title: {
          mount: 0.5,
          x: 260,
          text: {
            text: 'Trending News This Week',
            fontFace: 'Regular',
            fontSize: 48,
          },
        },
        Newslist: {
          w: 800,
          h: 350,
          x: 380,
          y: 270,
          mount: 0.5,
          Slider: {},
        },
      },
    }
  }

  _init() {
    this.index = 0
  }

  getMoreRows() {}

  get _Slider() {
    return this.tag('Slider')
  }

  reset() {
    this._Slider.children = []
  }

  _handleUpRelease() {
    if (this.index === 0) {
      this.index = this.dataLength - 1
    } else {
      this.index -= 1
    }
  }

  _handleDownRelease() {
    if (this.index === this.dataLength - 1) {
      this.index = 0
    } else {
      this.index += 1
    }
  }

  _getFocused() {
    return this.tag('Slider').children[this.index]
  }
}
