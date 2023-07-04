import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
    const [apiInfo, setApiInfo] = useState()

    const getProductById = () => {
        axios.get(url)
        .then(res => {
            setApiInfo(res.data)
        })
        .catch(err => console.log(err))    

    }
     return [apiInfo, getProductById]
}


export default useFetch






