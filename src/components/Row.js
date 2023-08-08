import { Lightning, Router } from '@lightningjs/sdk'

export default class Row extends Lightning.Component {
  static _template() {
    return {
      w: 1000,
      h: 75,
      rect: true,
      Heading: {
        x: 10,
        y: 20,
        color: 0xff000000,
        text: { fontSize: 28 },
      },
    }
  }

  set item(obj) {
    const { title, id } = obj
    this.itemId = id
    this.patch({
      Heading: { text: title.toString() },
    })
  }

  _focus() {
    this.patch({
      smooth: { color: 0xffff0000, scale: 1.1 },
      Heading: {
        smooth: { color: 0xffffffff },
      },
    })
  }

  _unfocus() {
    this.patch({
      smooth: { color: 0xffffffff, scale: 1.0 },
      Heading: {
        smooth: { color: 0xff000000 },
      },
    })
  }

  _handleEnterRelease() {
    Router.navigate(`news/${this.itemId}`)
  }
}
