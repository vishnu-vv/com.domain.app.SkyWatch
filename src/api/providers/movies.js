import api from '..'
import { convertItemsToTiles } from '../formatters/ItemFormatter'

export default function (page) {
  if (page.loaded) {
    return Promise.resolve()
  }
  page.apiIndex = 0
  page.loaded = true
  page.reset()
  page.getMoreRows = () => {
    page.apiIndex++
    return api.get('/trending/all/week?page=' + page.apiIndex).then((trending) => {
      let results = trending.results.filter((r) => !r.adult).slice(0, 7)
      let tiles = convertItemsToTiles(results)
      console.log('tiles', tiles)
      page._Slider.children = tiles
    })
  }
  //Initial load call twice to get enough rows
  return page.getMoreRows().then(page.getMoreRows)
}
