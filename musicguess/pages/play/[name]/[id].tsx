import { getSession } from "next-auth/react";
import Header from "../../../components/Header";
import PlayBanner from "../../../components/PlayBanner";
import { PostPageQuery } from "../../difficulty/[name]/[id]";
import { useRouter } from "next/router";





function play({ ... props }) {
    const router = useRouter();
    const query = router.query as PostPageQuery;
    console.log(query)
    return (
      <div className="h-[100vh] w-full bg-[url('/images/bg.png')]">
        <Header/>
        <PlayBanner id={query.id} name={query.name}/>
      </div>
    )
}

export default play

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


