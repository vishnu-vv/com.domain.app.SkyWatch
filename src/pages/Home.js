import { Utils, Lightning } from '@lightningjs/sdk'
import Button from '../components/Button'

export default class Home extends Lightning.Component {
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
            text: 'Welcome to Sky Watch',
            fontFace: 'Regular',
            fontSize: 48,
          },
        },
        Menu: {
          w: 800,
          h: 350,
          x: 380,
          y: 270,
          mount: 0.5,
          Movies: { x: 150, h: 75, mount: 0.5, type: Button, label: 'Movies' },
          News: { x: 400, h: 75, mount: 0.5, type: Button, label: 'News' },
        },
      },
    }
  }

  _init() {
    this._setState('Movies')
  }

  static _states() {
    return [
      class Movies extends this {
        _getFocused() {
          return this.tag('Movies')
        }
        _handleRight() {
          this._setState('News')
        }
      },
      class News extends this {
        _getFocused() {
          return this.tag('News')
        }
        _handleLeft() {
          this._setState('Movies')
        }
      },
    ]
  }

  _handleLeft() {
    if (this.index === 0) {
      this.index = this.dataLength - 1
    } else {
      this.index -= 1
    }
    this.repositionWrapper()
  }

  _handleRight() {
    if (this.index === this.dataLength - 1) {
      this.index = 0
    } else {
      this.index += 1
    }
    this.repositionWrapper()
  }

  _getFocused() {
    return this.tag('Slider').children[this.index]
  }
}
