import { getSession } from "next-auth/react";
import Header from "../../../components/Header";
import PlayBanner from "../../../components/PlayBanner";
import { PostPageQuery } from "../../difficulty/[name]/[id]";
import { useRouter } from "next/router";
import { getTracks } from "../../../helpers/playHelper";





function play({ ... props }) {
    const router = useRouter();
    const query = router.query as PostPageQuery;
    console.log(query)
    return (
      <div className="h-[100vh] w-full bg-[url('/images/bg.png')]">
        <Header/>
        <PlayBanner id={query.id} name={query.name} token={props.session?.user.accessToken}/>
      </div>
    )
}

export default play

export const getServerSideProps = async (context : any) => {
    var id = context.query.id
    console.log("IDDDDDDD",id)
    const session = await getSession(context);
    const response = await getTracks(session?.user.accessToken,id)
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


