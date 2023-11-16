'use client' 
import { UserIcon } from "@heroicons/react/24/solid"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


  

const Page = ()=>{
    const [contact,setContact]= useState()
    const id = useSearchParams().get('id')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/contacts/${id}`);
        //console.log(response)
        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(contact)
    return(
        <div className="bg-sky-300">
         <UserIcon height={300} width={300}/>
            {contact && <div className="flex flex-col">
                <span>email :{contact.email}</span>
                <span>Nom : {contact.name}</span>
                <span>Numero :{contact.numero}</span>
            </div>}
        </div>
    )
}

export default Page