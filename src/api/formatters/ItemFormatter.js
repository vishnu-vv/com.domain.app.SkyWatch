import Tile from '../../components/Tile'
import { getImageUrl } from '../index'

export function convertItemsToTiles(items = []) {
  console.log('convertItemsToTiles', items)
  return items.map((item, index) => {
    return {
      type: Tile,
      item: {
        label: item.title || item.name,
        src: getImageUrl(item.poster_path || item.profile_path),
        rating: item.vote_average || '',
        overview: item.overview || '',
        releaseDate: item.release_date || item.first_air_date || '',
      },
      w: 385,
      h: 545,
      x: index * 425,
    }
  })
}
