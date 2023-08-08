import { Utils, Lightning, Router } from '@lightningjs/sdk'
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
        _handleRightRelease() {
          this._setState('News')
        }
        _handleEnterRelease() {
          Router.navigate('movies')
        }
      },
      class News extends this {
        _getFocused() {
          return this.tag('News')
        }
        _handleLeftRelease() {
          this._setState('Movies')
        }
        _handleEnterRelease() {
          Router.navigate('news')
        }
      },
    ]
  }
}
