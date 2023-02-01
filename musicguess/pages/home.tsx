import React from 'react'
import Header from '../components/Header'
import {getSession, signOut} from 'next-auth/react'
import LoggedInBanner from '../components/LoggedInBanner'
import { getCategories } from './helpers/homeHelper'





function home({ ... props }) {
    return (
        <div className="h-[100vh] w-full bg-[url('/images/bg.png')]">
            <Header/>
            <LoggedInBanner items={props.categories}/>
        </div>
    )
}

export default home

export const getServerSideProps = async (context : any) => {
    const session = await getSession(context);
    console.log(session)
    if (!session ) {
        console.log("redirecting")
        return {
            redirect: {
                destination: "/"
            }
        }
    } else {        
        let categories = await getCategories(session?.user.accessToken,session?.user.refreshToken,process.env.SPOTIFY_CLIENT_ID as string,process.env.SPOTIFY_CLIENT_SECRET as string, session.expires)
        return {props: {
                session,categories
            }}
    }
}


