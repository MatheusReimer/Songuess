import { Featured, ItemsOfPlaylists } from "../types/featured";

export async function getCategories(token:string | undefined,refreshToken:string|undefined,client_id:string,client_secret:string, expires:string){

    console.log(`Bearer ${token}`)
    let url =  `${process.env.NEXT_PUBLIC_SPOTIFY_BASE_URL}${process.env.NEXT_PUBLIC_FEATURED_PLAYLISTS_ENDPOINT}`
    const data = await endpointRequest(url,token)
    const result:Featured = await data.json()
    let categories = desserializeObject(result)
    return categories
}


async function endpointRequest(url:string,token:string|undefined): Promise<Response> {
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

function desserializeObject(result:Featured){
  
  let desserialized = result.playlists.items.map((category:ItemsOfPlaylists) => {
    return {
        name: category.name,
        href:category.href,
        images:category.images === undefined ? "" : category.images[0].url,
        id:category.id,
    }
})
return desserialized;
}