// Helpers to write the video blocks of a project without repeating objects.
// They only build plain objects: the shape is documented below.
//
// TILE (one video, always clickable):
//   { kind: 'youtube',   id: 'abc123',  orientation: 'h' | 'v', cover }  -> click plays in place
//   { kind: 'drive',     id: 'fileId',  orientation: 'h' | 'v', cover }  -> click plays in place
//   { kind: 'instagram', url: 'https://...', orientation: 'v',  cover }  -> click opens the link
//   { kind: 'image',     src }                                           -> hero only, not clickable
//
// ROW:   { items: [tile | stack, ...], size?: 'sm' | 'md' | 'lg' }
//        All items of a row share the same height, whatever the mix.
// STACK: { stack: [tile, tile, ...] }  tiles one above the other, as a single row item.
//
// SECTION: { id, rows: [row, ...] }. The id is the key of its title/description
//          in the locales: <zone>.projects.items.<slug>.sections.<id>.{title,description}

export const yt = (id, cover, orientation = 'h') => ({ kind: 'youtube', id, orientation, cover })
export const drive = (id, cover, orientation = 'h') => ({ kind: 'drive', id, orientation, cover })
export const ig = (url, cover, orientation = 'v') => ({ kind: 'instagram', url, orientation, cover })
export const image = (src) => ({ kind: 'image', src })

export const stack = (...tiles) => ({ stack: tiles })
export const row = (items, size) => ({ items, size })
export const section = (id, ...rows) => ({ id, rows })

// Splits many tiles into rows of `perRow` (last row can be shorter).
//   grid([a, b, c, d, e], 3) -> two rows: [a, b, c] and [d, e]
export function grid(tiles, perRow, size) {
  const rows = []
  for (let i = 0; i < tiles.length; i += perRow) {
    rows.push(row(tiles.slice(i, i + perRow), size))
  }
  return rows
}
