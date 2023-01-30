type PlaylistTypes= {
    id:string,
    background:string,
    playlistName:string,
    description:string?
  }

export interface IPlaylists{
    playlists:PlaylistTypes[]
}