import {useRouter} from "next/router";

interface Props{
    categorie:"",
}
export default function Card<Props>({categorie='',image=''}){
    const router=useRouter();


    return(<div onClick={()=>{router.push(`/categorie/${categorie}`)}}>
    <img src={image} className={'w-20 mx-10'}/>
        <h1>
            {categorie}
        </h1>
    </div>)
}