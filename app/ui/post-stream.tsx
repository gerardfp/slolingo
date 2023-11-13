export function PostStream({posts}){
    return (
        <div>
        { posts.map(post => (
            <div>
                <p>{post.content}</p>
                <p>{post.name}</p>
                <img src={post.picture} />
            </div>
        ))}
        </div>
    )
}