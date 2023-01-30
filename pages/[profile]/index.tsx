import {useRouter} from "next/router";
import Navbar from "../components/navbar/index";
export default function Profile(){

    const router=useRouter();
    const query=router.query

    return(<div>
        <Navbar/>
        <h1>Mi nombre es {query.profile}</h1>
    </div>)
}