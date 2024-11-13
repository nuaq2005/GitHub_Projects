import {useState} from "react";
import { supabase } from "../clientc";
import './Comment.css';

const Comment = (props) =>  {
    const id = props.id;
    const date = new Date(props.created_at);
    const formattedDate = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });

    const [upvotes, setUpvotes] = useState(props.upvotes);

    const handleClick = async (event) => {
        event.preventDefault();

        await supabase
          .from('Comments')
          .select('upvotes')
          .eq('id', id)
          .single();

          const updatedUpvote = props.upvotes + 1;

          const { data, error } = await supabase
            .from('Comments')
            .update({ upvotes: updatedUpvote })
            .eq('id', id);   
            
            setUpvotes(updatedUpvote);
    }

    return (
        <div className= 'comment-card'>
            <h2>{props.title}</h2>
            <h6 className = "time"> {formattedDate} </h6>
            <h3 className="content">{props.content}</h3>
            {props.image_url && <img src={props.image_url} alt="Post" className="post-image"/>}
            <div className="comment-footer">
                <button className="upvotesBtn" onClick ={handleClick}> ↑ </button>
                <span className="upvotes">{upvotes}</span>
            </div>
        </div>
    );
  };

  export default Comment;