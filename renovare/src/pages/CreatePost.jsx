import {useState} from 'react';
import {supabase} from '../client'

const CreatePost = () => {

    const [post, setPost] = useState({id:null, title: "", created_at:"", content: "", image_url: "", upvotes: 0});

    const createPost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .insert({id: post.id, title: post.title, created_at: post.created_at, content: post.content, image_url: post.image_url, upvotes: post.upvotes})
          .select();
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

    return (
        <div>
            <label htmlFor="title">Title</label> <br />
            <input type="text" id="title" name="title" onChange={handleChange} /><br />
            <br/>

            <label htmlFor="content">Content</label><br />
            <input type="text" id="content" name="content" onChange={handleChange} /><br />
            <br/>

            <label htmlFor="image_url">Image URL</label><br />
            <input type="text" id="image_url" name="image_url" onChange={handleChange} /><br />
            <br/>
                
            <input type="submit" value="Submit" onClick={createPost} />
        </div>
    )
}

export default CreatePost