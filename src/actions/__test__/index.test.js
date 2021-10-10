import { SAVE_COMMENT } from "actions/type";
import { saveComment } from "actions";

describe("save comment",()=>{
    it("has a correct type", ()=>{
        expect(saveComment().type).toEqual(SAVE_COMMENT);
    })
    it("has a correct payload",()=>{
        const action = saveComment("Payload Test");
        expect(action.payload).toEqual("Payload Test");
    })
})