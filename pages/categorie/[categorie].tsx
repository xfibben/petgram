import {useRouter} from "next/router";
import {useState,useEffect} from "react";
import Navbar from "../components/navbar/index";
export default function (){

    const router=useRouter();
    const qry=router.query.categorie;

    const [query,setQuery]=useState<string>('');



    const [character,setCharacter]=useState([])
    const gettingQuery=async()=>{
        await  setQuery(qry)
        await console.log(query)
    }
    const getCharacter=async()=>{
        try{
            const getting=await fetch('https://rickandmortyapi.com/api/character/?name='+qry);
            const gettingCharacter=await getting.json();


            await setCharacter(gettingCharacter.results[0])

        }catch(error){
            console.error(error);
            router.push(`/categorie/${qry}`)


        }

    }
    const iniciar=async()=>{

        await gettingQuery();
        await getCharacter();

    }
    console.log(character)
    useEffect(()=>{
iniciar();

    },[])

    return(<div>
        <Navbar/>
        <h1 className={'text-5xl'}>{character['name']}</h1>
        <img src={character['image']}/>


    </div>)
}


