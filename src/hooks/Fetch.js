import { useEffect, useState } from "react"

export const Fetch=(url)=>{
    const [data,setData]=useState(null)

    useEffect(()=>{
        const FetchData=async()=>{
            const res =await fetch(url)

            const json=await res.json()

            setData(json)
        }
        FetchData()
    },[url])
    return {data};
}