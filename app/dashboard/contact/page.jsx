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
        const response = await axios.get(`https://6554eaf863cafc694fe73304.mockapi.io/contacts/${id}`);
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
        <div className="bg-gray-200 border border-gray-300 rounded-lg p-4 flex items-center justify-evenly">
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