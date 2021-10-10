import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

function header(isLoggedIn,changeAuth){

    const handleClick = ()=>{
        changeAuth(!isLoggedIn);
    }

    return (
        <ul>
            <li>
                <Link to="/post">Post</Link>
            </li>
            <li>
                <Link to="/">Comments</Link>
            </li>
            <li>
                <button onClick={handleClick}>{isLoggedIn? "Sign Out":"Sign In"}</button>
            </li>
        </ul>
    )
}

function App(props){
    return (
        <div>
            {header(props.auth,props.changeAuth)}
            <Route path="/post" component={CommentBox}  />
            <Route path="/" exact component={CommentList} />
        </div>
    )
}

function mapStateToProps(state){
    return {
        auth : state.auth,
    }
}

export default connect(mapStateToProps,actions)(App);