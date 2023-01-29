import { NextPage } from "next"
import Header from "../components/Header"
import Banner from "../components/Banner";
import { getSession } from "next-auth/react";

const Home:NextPage=()=> {
  return (
    <div className="h-[100vh] w-full bg-[url('/images/bg.png')]">
      <Header/>
      <Banner/>
    </div>
  )
}

export default Home;




export const getServerSideProps = async (context:any) =>{
  const session = await getSession(context);
  
  if(session){
    return {
      redirect:{
        destination:"/home"
      }
    }
  }
  return{
    props:{session}
  }
}