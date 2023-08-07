import Tile from '../../components/Tile'
import { getImageUrl } from '../index'

export function convertItemsToTiles(items = []) {
  return items.map((item, index) => {
    return {
      type: Tile,
      item: {
        label: item.title || item.name,
        src: getImageUrl(item.poster_path || item.profile_path),
      },
      w: 350,
      h: 525,
      x: index * 375,
    }
  })
}
