import { useState } from 'react'
import { useEffect } from 'react'
import { supabase } from './client'
import { Link } from 'react-router-dom'
import Post from './components/Post'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
        const {data} = await supabase
        .from('Posts')
        .select()
        .order('created_at', { ascending: true })
        
        // set state of posts
        setPosts(data);
    }
    fetchPosts().catch(console.error);
}, [posts]);

  return (
   <div className="home-page"> 
   <h1> Renovare </h1>
  <p> Make your rental feel more like a forever home </p>
  <div className="all-posts">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <Link to={`/post/${post.id}`} style={{textDecoration:'none'}} className ="post-link">
                <Post
                  id={post.id}
                  title={post.title}
                  created_at={post.created_at}
                  content={post.content}
                  upvotes={post.upvotes}
                />
              </Link>
            </div>
          ))
        ) : (
          <h2>{'Start a Conversation!'}</h2>
        )}
        </div>
  </div> 

  )
}

export default App
