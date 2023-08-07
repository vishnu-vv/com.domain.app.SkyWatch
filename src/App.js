import { Lightning, Utils } from '@lightningjs/sdk'
import Tile from './components/Tile'

export default class App extends Lightning.Component {
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
            text: 'Trending Movies This Week',
            fontFace: 'Regular',
            fontSize: 48,
          },
        },
        MovieList: {
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

  repositionWrapper() {
    const slider = this.tag('Slider')
    const sliderWidth = this.tag('MovieList').w
    const currentWrapperX = slider.transition('x').targetvalue || slider.x
    const currentFocus = slider.children[this.index]
    const currentFocusX = currentFocus.x + currentWrapperX
    const currentFocusOuterWidth = currentFocus.x + currentFocus.w

    if (currentFocusX < 0) {
      slider.setSmooth('x', -currentFocus.x)
    } else if (currentFocusOuterWidth > sliderWidth) {
      slider.setSmooth('x', sliderWidth - currentFocusOuterWidth)
    }
  }

  _init() {
    this.index = 0
    this.dataLength = 9
    const movieList = []
    for (let i = 0; i < this.dataLength; i++) {
      movieList.push({
        type: Tile,
        x: i * (300 + 30),
        item: { label: `Movie ${i + 1}`, src: `./images/sample${i + 1}.jpg` },
      })
    }
    this.tag('Slider').children = movieList
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
