
import { SAVE_COMMENT } from "actions/type";
import commentReducer from "reducers/comment";

it("will handle save comment type action",()=>{
    const action = {
        type : SAVE_COMMENT,
        payload : 'Works Fine',
    }
    expect(commentReducer([],action)).toEqual(['Works Fine']);
})

it("will handle any unknown action type",()=>{
    expect(commentReducer([],{})).toEqual([]);
})