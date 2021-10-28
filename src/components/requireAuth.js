import { useEffect } from "react";
import { connect } from "react-redux";

export default function(ChildComponent){

    function ComposedComponent(props){
        useEffect(()=>{
            shouldNavigateAway();
        },[props.auth])
    
        function shouldNavigateAway(){
            if(!props.auth){
                props.history.push('/');
            }
        }

        return <ChildComponent {...props} />
    }

    function mapStateToProps(state){
        return {auth : state.auth};
    }

    return connect(mapStateToProps)(ComposedComponent);

}