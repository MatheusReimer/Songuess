import { NextPage } from "next"
import Header from "../components/Header"

const Home:NextPage=()=> {
  return (
    <div className="h-[100vh] w-full bg-black">
      <Header/>
    </div>
  )
}

export default Home;