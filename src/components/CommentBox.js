import { useState } from "react";

import { connect } from "react-redux";
import * as actions from "actions";
import requireAuth from "./requireAuth";

function CommentBox(props){
    const [comment, setComment] = useState("");

    
    const handleChange = (e)=>{
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.saveComment(comment);
        setComment("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add a Comment</h1>
                <textarea onChange={handleChange} value={comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button className={"fetchButton"} onClick={props.fetchComments}>Fetch Comments</button>
        </div>
    )

}



export default connect(null,actions)(requireAuth(CommentBox));