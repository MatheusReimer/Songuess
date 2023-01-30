import React from 'react'
import Header from '../components/Header'
import {getSession, signOut} from 'next-auth/react'
import LoggedInBanner from '../components/LoggedInBanner'
import { getCategories } from './helpers/homeHelper'
import { Categories, ItemsOfCategories } from '../types/types'




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
    let rawCategories:Categories = await getCategories(session?.user.accessToken)
    console.log(rawCategories)
    let categories = rawCategories.categories.items.map((category:ItemsOfCategories) => {
        return {
            name: category.name,
            href:category.href,
            icons:category.icons === undefined ? "" : category.icons[0].url,
            id:category.id,
        }
    })
    console.log(categories)
    if (! session) {
        return {
            redirect: {
                destination: "/"
            }
        }
    } else {        
        return {props: {
                session,categories
            }}
    }
}


