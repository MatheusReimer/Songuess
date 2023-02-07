import { Tracks, TracksItems } from "../types/playlistsDetails"


export async function getTracks(token:string | undefined,playlistId:string|undefined){

    //const url = `${process.env.SPOTIFY_API_URL}/playlists/${playlistId}/tracks?limit=100`;
    const url = `${process.env.NEXT_PUBLIC_SPOTIFY_BASE_URL}${process.env.NEXT_PUBLIC_GET_PLAYLIST}${playlistId}`;
    const response = await endpointRequest(url,token);
    const data = await response.json();
    const desserialized = desserializeObject(data);
    console.log(desserialized)
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

  function desserializeObject(result:Tracks){
  
    let desserialized = result.tracks.items.map((track:TracksItems) => {
      return {
          track: {
              href: track.track!.href,
              id: track.track!.id,
              name: track.track!.name
          }
      }
  })
  return desserialized;
  }