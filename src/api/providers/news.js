import { convertItemsToRows } from '../formatters/ItemFormatter'
import { news } from '../../mock/news'

export const newsListProvider = function (page) {
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

export const newsDetailProvider = function (page, { id }) {
  if (page.loaded) {
    return Promise.resolve()
  }
  page.loaded = true
  page.fetchNewsData = () => {
    return new Promise((resolve) => {
      const newsItem = news.find((item) => item.id === parseInt(id))
      resolve(newsItem)
    }).then((data) => {
      page.data = data
    })
  }
  return page.fetchNewsData()
}
