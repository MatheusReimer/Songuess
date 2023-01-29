import React from 'react'
import Header from '../components/Header'
import {getSession, signOut} from 'next-auth/react'
import LoggedInBanner from '../components/LoggedInBanner'
import axios from 'axios'




async function test(session:any){
    console.log(`Bearer ${session.accessToken}`)
    let url =  `https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`
    const {data} = await axios.get(url, {
            headers: { 
              'Authorization':`Bearer ${session.accessToken}`,
              "Content-Type":"application/json"
            }
          })
    return data
}

function home(data: string[]) {
    return (
        <div className="h-[100vh] w-full bg-[url('/images/bg.png')]">
            <Header/>
            <LoggedInBanner genres={data}/>


        </div>
    )
}

export default home

export const getServerSideProps = async (context : any) => {
    const session = await getSession(context);
    console.log(session?.accessToken)
    if (! session) {
        return {
            redirect: {
                destination: "/"
            }
        }
    } else {        

        return {props: {
                session
            }}
    }
}


