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
        y: 500,
        color: 0xff000000,
        text: { fontSize: 28 },
      },
      Details: {
        x: 10,
        y: 575,
        rect: true,
        visible: false,
        text: { fontSize: 28 },
        Rating: {
          x: 0,
          y: 0,
          text: { fontSize: 28 },
          label: { text: 'Rating: ' },
        },
        ReleaseDate: {
          x: 0,
          y: 40,
          text: { fontSize: 28, text: 'Release Date: ' },
          label: { text: 'Release Date: ' },
        },
        Overview: {
          x: 0,
          y: 80,
          text: { fontSize: 28 },
          label: { text: 'Overview: ' },
        },
      },
    }
  }

  set item(obj) {
    const { label, src, rating, overview, releaseDate } = obj
    this.patch({
      Image: { src },
      Label: { text: label.toString() },
      Details: {
        Rating: { text: 'Rating: ' + rating.toString() },
        ReleaseDate: { text: 'Release Date: ' + releaseDate.toString() },
        Overview: { text: 'Overview: ' + overview.toString() },
      },
    })
  }

  _focus() {
    this.patch({
      smooth: { color: 0xffff0000, scale: 1.1 },
      Label: {
        smooth: { color: 0xffffffff },
      },
      Details: { visible: true },
    })
  }

  _unfocus() {
    this.patch({
      smooth: { color: 0xffffffff, scale: 1.0 },
      Label: {
        smooth: { color: 0xff000000 },
      },
      Details: { visible: false },
    })
  }
}
