import {useState} from 'react';
import {supabase} from '../clientc'

const CreateComment = () => {

    const [comment, setComment] = useState({id:null, title: "", created_at:"", content: "", image_url: "", upvotes: 0});

    const createComment = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Comments')
          .insert({id: comment.id, title: comment.title, created_at: comment.created_at, content: comment.content, image_url: comment.image_url, upvotes: comment.upvotes})
          .select();
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
                
            <input type="submit" value="Submit" onClick={createComment} />
        </div>
    )
}

export default CreateComment