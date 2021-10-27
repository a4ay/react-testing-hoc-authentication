import { connect } from "react-redux"

function CommentList(props){

    const renderComments = ()=>{
        return props.comments.map( comment => (
            <li key={comment}>{comment}</li>
        ))
    }

    return(
        <div>
            <h1>Comments List</h1>
            <ul>
                {renderComments()}
            </ul>
        </div>
    )

}

function mapStateToProps(state){
    return {comments : state.comments};
}


export default connect(mapStateToProps)(CommentList);