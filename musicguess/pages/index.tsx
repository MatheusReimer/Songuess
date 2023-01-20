import { NextPage } from "next"
import Header from "../components/Header"
import Banner from "../components/Banner";

const Home:NextPage=()=> {
  return (
    <div className="h-[100vh] w-full bg-[url('/images/bg.png')]">
      <Header/>
      <Banner/>
    </div>
  )
}

export default Home;