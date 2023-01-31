import React from 'react'
import Header from '../components/Header'
import {getSession, signOut} from 'next-auth/react'
import LoggedInBanner from '../components/LoggedInBanner'
import { getCategories } from './helpers/homeHelper'
import { Categories, ItemsOfCategories } from '../types/categories'
import DifficultyBanner from '../components/DifficultyBanner'




function difficulty({ ... props }) {
    return (
        <div className="h-[100vh] w-full bg-[url('/images/bg.png')]">
            <Header/>
            <DifficultyBanner/>
        </div>
    )
}

export default difficulty

export const getServerSideProps = async (context : any) => {
    const session = await getSession(context);
    if (!session ) {
        console.log("redirecting")
        return {
            redirect: {
                destination: "/"
            }
        }
    } else {        
        return {props: {
                session,
            }}
    }
}


