
'use client'
import { PencilIcon, TrashIcon, UserIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";

const delContactById = async (id) => {
  try {
    await axios.delete(`https://6554eaf863cafc694fe73304.mockapi.io/contacts/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const Page  =async()=> {
  
    const data = await fetch("https://6554eaf863cafc694fe73304.mockapi.io/contacts");
    const contacts = await data.json();
   


  const contactsElement = contacts.map((contact) => (
    <div
      className="flex p-3 items-center justify-between border border-t-0 border-l-0 border-r-0"
      key={contact.id}
    >
      <Link href={`/dashboard/contact?id=${contact.id}`}>
        <div>
          <div className="flex items-center">
            <UserIcon height={50} width={50} />
            <span className="ml-3">{contact.email}</span>
          </div>
        </div>
      </Link>
      <div className="flex">
        <button
          type="submit"
          className="hover:bg-sky-100 p-2 rounded-sm  mr-2 font-bold flex"
          onClick={() => delContactById(contact.id)}
        >
          <TrashIcon height={20} /> Delete
        </button>

        <Link href={`/dashboard/modifier?id=${contact.id}`}  className="hover:bg-sky-100 p-2 rounded-sm font-bold flex ">
          Modifier <PencilIcon height={20} className="ml-2" />
        </Link >
      </div>
    </div>
  ));

  return (
    <div>
      <h1 className="text-blue-400 text-2xl">Liste des contacts</h1>
      <div className="flex flex-col ">{contactsElement}</div>
    </div>
  );
}
export default Page