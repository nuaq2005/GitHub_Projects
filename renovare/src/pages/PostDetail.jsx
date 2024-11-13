import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Post from '../components/Post';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
          const { data} = await supabase
            .from('Posts')
            .select()
            .eq('id', id)
            .single();

            setPost(data);
        };
        fetchPost().catch(console.error);
      }, [id]);


  return (
    <div className="post-detail">
        {post ? (
        <div>
          <Post 
          id={post.id}
          title={post.title}
          created_at={post.created_at}
          content={post.content}
          upvotes={post.upvotes}
          />
          <Link to={`/edit-post/${id}`} className='postBtn'> Edit </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div>
      <Link to={`/create-comment`} style={{textDecoration:'none'}} className='postBtn'> Add A Comment 💭 </Link>
      </div>
    </div>
  );
}

export default PostDetail;