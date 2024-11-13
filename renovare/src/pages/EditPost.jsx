import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {supabase} from '../client'

const EditPost = () => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, title: "", content: "", image_url: "", upvotes: ""});

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select('*')
                .eq('id', id)
                .single();
                setPost(data); 
        };
        fetchPost().catch(console.error);
    }, [id]);
    
    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
          .from('Posts')
          .update({
                title: post.title,
                content: post.content,
                image_url: post.image_url,
                upvotes: post.upvotes
            })
          .eq('id', id);
      
        window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
          .from('Posts')
          .delete()
          .eq('id', id);
      
        window.location = "/";
    }

    return (        
    <div>
        <label htmlFor="title">Title</label> <br />
        <input type="text" id="title" value = {post.title} onChange={handleChange} /><br />
        <br/>
            
        <label htmlFor="content">Content</label>
        <input type="text" id="content" value = {post.content} onChange={handleChange} /><br />
        <br />

        <label htmlFor="image_url">Image URL</label>
        <input type="text" id="image_url" value = {post.image_url} onChange={handleChange} /><br />
        <br />

        <input className="postBtn" type="submit" value="Submit" onClick={updatePost} />
        <button className="postBtn" onClick={deletePost}>Delete </button>
    </div>
    )
}

export default EditPost;