import { convertItemsToRows } from '../formatters/ItemFormatter'
import { news } from '../../mock/news'

export default function (page) {
  if (page.loaded) {
    return Promise.resolve()
  }
  page.loaded = true
  page.reset()
  page.dataLength = 7
  page.getMoreRows = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 0)
    }).then(() => {
      let rows = convertItemsToRows(news)
      page._Slider.children = rows
    })
  }
  return page.getMoreRows()
}
