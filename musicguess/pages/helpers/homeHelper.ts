import { Categories, ItemsOfCategories } from "../../types/types"

export async function getCategories(token:string | undefined){
    console.log(`Bearer ${token}`)
    let url =  `${process.env.SPOTIFY_BASE_URL}${process.env.CATEGORIES_ENDPOINT}`
    const data = await createTask(url,token)  
    const result = await data.json()
    return result as Categories
}

async function createTask(url:string,token:string|undefined): Promise<Response> {
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    const opts: RequestInit = {
      method: 'GET',
      headers,
      //body: JSON.stringify(taskParam),
    };
    return fetch(url, opts)
  }
