import axios from "axios"

const URL: string ="http://localhost:3333/api/v1"

export const getKids = async () =>{
    return await axios.get(`${URL}/read-kids`).then((res: any) =>{
        return res.data.data
    })
}
export const sortedKids = async() =>{
    return await axios.get(`${URL}/read-kid`).then((res: any) =>{
        return res.data.data
    })
}