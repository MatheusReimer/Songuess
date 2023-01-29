import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { Account, Session, User } from "next-auth"
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";


const scopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "app-remote-control",
  "streaming",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-follow-modify",
  "user-follow-read",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-library-modify",
  "user-library-read",
  "user-read-email",
  "user-read-private"
].join(",")


const options = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,

      authorization: {
        url: 'https://accounts.spotify.com/authorize',
        params: {
          scope: scopes
        },
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token.id = account.id;
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        
        try {
          const {data} = await axios.get('https://api.spotify.com/v1/me', {
            headers: { 
              'Authorization': 'Bearer ' + account.access_token,
            }
          })
          token.id = data.id 
        } catch (err) {
          throw new Error()
        }
      }
      return token;
    },
    session({ session, token }: any) {
      session.user = token;
      return session;
    },
  },

}

export default (req: NextApiRequest,res: NextApiResponse) => NextAuth(req,res,options)

