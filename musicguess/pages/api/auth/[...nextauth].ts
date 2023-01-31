import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";
import NextAuth, {Account, Session, User} from "next-auth"
import {JWT} from "next-auth/jwt";
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


const options = { // https://next-auth.js.org/configuration/providers
    providers: [SpotifyProvider(
            {
                clientId: process.env.SPOTIFY_CLIENT_ID as string,
                clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,

                authorization: {
                    url: 'https://accounts.spotify.com/authorize',
                    params: {
                        scope: scopes
                    }
                }
            }
        )],
    callbacks: {
        async jwt(
            {token, account} : any
        ) {
            if (account) {
                token.id = account.id;
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;

                try {
                    const {data} = await axios.get('https://api.spotify.com/v1/me', {
                        headers: {
                            'Authorization': 'Bearer ' + account.access_token
                        }
                    })
                    token.id = data.id
                } catch (err) {
                    throw new Error()
                }
            }
            return token;
        },
        async session(
            {session, token} : any
        ) {
            session.user = token;
            if (Date.now() < new Date(session ?. expires as string).getTime()) {
                console.log("USER.. BEFORE \n",session.expires)
                let newToken = await refreshAccessToken(session ?. user ?. refreshToken as string)
                session.user.accessToken = newToken.access_token;
                //aumentar tempo de expiração
                var today = new Date();
                today.setHours(today.getHours() + 1);
                session.expires = today.toISOString()
                console.log("USER.. AFTER \n",session.expires)
            }
            return session;
        }
    }

}

export default(req : NextApiRequest, res : NextApiResponse) => NextAuth(req, res, options)



async function refreshAccessToken(token : string) {
    try {
        const url = process.env.REFRESH_TOKEN_ENDPOINT as string

        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': `Basic ` + (new Buffer(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))
            },
            method: "POST",
            body: new URLSearchParams(
                {grant_type: "refresh_token", refresh_token: token}
            )
        })

        const refreshedTokens = await response.json()

        if (! response.ok) {
            throw refreshedTokens
        }

        return refreshedTokens

    } catch (err) {
        console.log(err)
    }
}
