import { useEffect, useState } from "react"
import Post from "./Post"
import './Post.css'

export default function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
        // .then(data => console.log(data))
    }, [])
    return (
        <div className="Box">
            <h2>Post : {posts.length}</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}

// 1. Creat a state to stor data
// 2. Creat useEffect with no dipendency
// 3. Use fatch to load data
// 4. Use json to convert data
// 5. Use maping for show the data
