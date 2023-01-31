export type Items={
  items:ItemsOfCategories[],
}

export interface ItemsOfCategories  {
  href?:string,
  id?:string,
  name?:string,
  icons?:Icons[],
}

export type Icons={
  url?:string,
}

export type Categories={
  categories:Items,
}