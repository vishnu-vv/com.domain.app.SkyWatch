import { Lightning } from '@lightningjs/sdk'

export default class Tile extends Lightning.Component {
  static _template() {
    return {
      w: 300,
      h: 350,
      rect: true,
      Image: {
        w: (w) => w,
        h: (h) => h - 50,
      },
      Label: {
        x: 10,
        y: 302,
        color: 0xff000000,
        text: { fontSize: 32 },
      },
    }
  }

  set item(obj) {
    const { label, src } = obj
    this.patch({
      Image: { src },
      Label: { text: label.toString() },
    })
  }

  _focus() {
    this.patch({
      smooth: { color: 0xff763ffc, scale: 1.1 },
      Label: {
        smooth: { color: 0xffffffff },
      },
    })
  }

  _unfocus() {
    this.patch({
      smooth: { color: 0xffffffff, scale: 1.0 },
      Label: {
        smooth: { color: 0xff000000 },
      },
    })
  }
}
