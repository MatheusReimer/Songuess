export type Items={
    items:TracksItems[],
  }
  
  export interface TracksItems  {
    track?:Track
  }
  export type Track={
    href?:string,
    id?:string,
    name?:string,
  
}

  
  export type Images={
    url?:string,
  }
  
  export type Tracks={
    tracks:Items,
  }