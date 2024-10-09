import './Post.css'

export default function Post({ post }) {
    const { userId, title, body } = post
    return (
        <>
            <div className='innerBox'>
                <h3>User ID : {userId}</h3>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        </>
    )
}