
import axios from "axios"

export const  getContactById = async (id)=>{
    const data = (await axios.get(`http://localhost:3001/contacts/${id}`)).data
    return data
}