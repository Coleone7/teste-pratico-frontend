import React,{useState, useEffect} from "react"
import Coments from "../components/Coments"
import User from "../components/User"
import './post.css'


const Post = () => {
    const [posts, getPost] = useState([])

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          const postsData = data.map((post) => ({
            ...post,
            showComments: false,
          }));
          getPost(postsData);
        })
    }, [])
  
    const toggleComments = (postId) => {
      getPost((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, showComments: !post.showComments } : post
        )
      );
    };
  

    return(
        <div className="body-post">
            <h1>Teste Prático. Cenário 1 - FrontEnd - Lista de Post.</h1>
            { 
                posts.map(post=> {
                    return(
                        <div className="post" >
                            <User idUser={post.userId}/>
                            <div onClick={() => toggleComments(post.id)} className="post-section">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <br/>
                                <span>
                                    {post.showComments ? 'Ocultar Comentários' : 'Mostrar Comentários'}
                                </span>
                            </div>
                            {post.showComments && (
                                <div className="coment-section">
                                    <Coments postId={post.id} />
                                </div>
                            )}
                        </div>

                        
                    )
                })
            }
        </div>
    )
}

export default Post




