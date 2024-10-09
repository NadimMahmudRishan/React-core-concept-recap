import { useEffect, useState } from "react"

export default function Post(){
    const [post,setPost]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return(
        <>
        <h2>Post : {}</h2>
        </>
    )
}

// 1. Creat a state to stor data
// 2. Creat useEffect with no dipendency
// 3. Use fatch to load data
// 4. Use json to convert data
// 5. 
