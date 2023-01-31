import { Categories, ItemsOfCategories } from "../../types/categories"

export async function getCategories(token:string | undefined,refreshToken:string|undefined,client_id:string,client_secret:string, expires:string){

    console.log(`Bearer ${token}`)
    let url =  `${process.env.SPOTIFY_BASE_URL}${process.env.CATEGORIES_ENDPOINT}`
    const data = await createTask(url,token)

    const result:Categories = await data.json()
    let categories = desserializeObject(result)
    return categories
}


async function createTask(url:string,token:string|undefined): Promise<Response> {
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    const opts: RequestInit = {
      method: 'GET',
      headers,
    };
    return fetch(url, opts) as Promise<Response>;
  }

function desserializeObject(result:Categories){
  
  let desserialized = result.categories.items.map((category:ItemsOfCategories) => {
    return {
        name: category.name,
        href:category.href,
        icons:category.icons === undefined ? "" : category.icons[0].url,
        id:category.id,
    }
})
return desserialized;
}