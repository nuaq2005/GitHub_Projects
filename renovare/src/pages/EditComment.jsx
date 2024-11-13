import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {supabase} from '../clientc'

const EditComment = () => {

    const {id} = useParams();
    const [comment, setComment] = useState({id: null, title: "", content: "", image_url: "", upvotes: ""});

    useEffect(() => {
        const fetchComment = async () => {
            const { data, error } = await supabase
                .from('Comments')
                .select('*')
                .eq('id', id)
                .single();
                setComment(data); 
        };
        fetchComment().catch(console.error);
    }, [id]);
    
    const updateComment = async (event) => {
        event.preventDefault();

        await supabase
          .from('Comments')
          .update({
                title: comment.title,
                content: comment.content,
                image_url: comment.image_url,
                upvotes: comment.upvotes
            })
          .eq('id', id);
      
        window.location = "/";
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

    const deleteComment = async (event) => {
        event.preventDefault();

        await supabase
          .from('Comments')
          .delete()
          .eq('id', id);
      
        window.location = "/";
    }

    return (        
    <div>
        <label htmlFor="title">Title</label> <br />
        <input type="text" id="title" value = {comment.title} onChange={handleChange} /><br />
        <br/>
            
        <label htmlFor="content">Content</label>
        <input type="text" id="content" value = {comment.content} onChange={handleChange} /><br />
        <br />

        <label htmlFor="image_url">Image URL</label>
        <input type="text" id="image_url" value = {comment.image_url} onChange={handleChange} /><br />
        <br />

        <input type="submit" value="Submit" onClick={updateComment} />
        <button className="deleteButton" onClick={deleteComment}>Delete</button>
    </div>
    )
}

export default EditComment;