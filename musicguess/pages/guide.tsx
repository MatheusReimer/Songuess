import React from 'react'
import Header from "../components/Header"
import Guide from '../components/Guide'

function guide() {
    return (
       <div className="h-[100vh] w-full bg-[url('/images/bg.png')]">
         <Header/>
         <Guide/>
        </div>
    )
}

export default guide