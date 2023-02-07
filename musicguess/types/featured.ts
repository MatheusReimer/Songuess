export type Playlists={
  items:ItemsOfPlaylists[],
}

export interface ItemsOfPlaylists  {
  href?:string,
  id?:string,
  name?:string,
  images?:Images[],
}

export type Images={
  url?:string,
}

export type Featured={
  playlists:Playlists,
}