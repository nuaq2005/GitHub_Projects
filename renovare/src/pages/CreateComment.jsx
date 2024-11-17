import {useState} from 'react';
import {supabase} from '../client';
import { useParams } from 'react-router-dom';

const CreateComment = () => {
    const {postId} = useParams();
    const [comment, setComment] = useState({ post_id: postId, content: "", image_url: "", upvotes: 0});

    const createComment = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Comments')
          .insert({
            post_id: comment.post_id,
            content: comment.content, 
            image_url: comment.image_url, 
            upvotes: comment.upvotes
        })
          .select();
          window.location = `/post/${postId}`
      }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setComment( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <label htmlFor="content">Content</label><br />
            <input type="text" id="content" name="content" value = {comment.content} onChange={handleChange} /><br />
            <br/>

            <label htmlFor="image_url">Image URL</label><br />
            <input type="text" id="image_url" name="image_url" value = {comment.image_url} onChange={handleChange} /><br />
            <br/>
               
            <input type="submit" value="Submit" className='btn' onClick={createComment} />
        </div>
    )
}

export default CreateComment;