
import {PlusIcon} from '@heroicons/react/24/solid'
import { z } from 'zod'
import { revalidatePath } from 'next/cache';
import axios from 'axios';

const contactSchema = z.object({
    email:z.string().email(),
    nom: z.string().min(3),
    prenom: z.string().min(3),
    Numero: z.string().min(9).refine(data => data.length >= 9, {
        message: 'Number must be at least 9 characters long',
        path:['custom']
      })
   
  });
const addContactAction = async(formadata)=>{
'use server'
const data = {
    email:formadata.get('email'),
    name:formadata.get('prenom') + ' '+ formadata.get('nom')  ,
    Numero:formadata.get('numero')
}
try{
    const parsedData = contactSchema.parse(data)
    parsedData ? await axios.post('https://6554eaf863cafc694fe73304.mockapi.io/contacts',parsedData) : null
    revalidatePath('/dashboard', 'layout')
}
catch(error){
    const customError = error.errors.find(err => err.code === 'custom');
   customError ? console.log(customError.message) : null
}
}
const Page = () => {
  return (
    <div className="h-full p-2 ">
      <h1 className=" text-2xl text-center mt-3">Ajouter contacts</h1>
      <form action={addContactAction} className=" flex justify-center">
        <div >
          <div className="flex flex-col mb-3">
            <label className="mb-2" htmlFor="nom">Nom</label>
            <input className="bg-gray-100 w-[400px] border-gray-200 placeholder:text-gray-300 rounded-md"  type="text" id="nom" placeholder="Nom" name="nom" />
          </div>

          <div className="flex flex-col mb-3">
            
            <label className="mb-2" htmlFor="prenom">Prenom</label>
            <input className="bg-gray-100 w-[400px] border-gray-200 placeholder:text-gray-300 rounded-md"  type="text" id="prenom" name="prenom" placeholder="Prenom" />
          </div>
          <div className="flex flex-col mb-3">
            
            <label className="mb-2" htmlFor="email">Email</label>
            <input className="bg-gray-100 w-[400px] border-gray-200 placeholder:text-gray-300 rounded-md"  type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-2" htmlFor="numero">Numero</label>{" "}
            <input className="bg-gray-100 w-[400px] border-gray-200 placeholder:text-gray-300 rounded-md" 
              type='number'
              id="numero"
              name="numero"
              placeholder="Numero"
            />
          </div>
        <button  className='mt-3 bg-sky-200 font-bold p-3 w-full flex justify-center items-center hover:bg-transparent border border-sky-200' type="submit" > Ajouter <PlusIcon className='ml-1' height={20}/></button>
        </div>
      </form>
    </div>
  );
};

export default Page;
