
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

import Root from 'root';

let wrapper;

beforeEach(()=>{

    wrapper = mount( 
        <Root>
            <CommentBox />
        </Root>
    );

})

afterEach(()=>{
    wrapper.unmount();
})

it("has a textarea  and a button",()=>{
    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(2);
});

describe("text area",()=>{

    beforeEach(()=>{
        wrapper.find("textarea").simulate("change",{
            target : { value : "Hello Testing",}
        })
        wrapper.update();
    })

    it("has a textarea where user can type in",()=>{
        
        expect(wrapper.find("textarea").prop("value")).toEqual("Hello Testing");
    });
    
    it("has a button and clears the text input when clicked",()=>{
        wrapper.find("form").simulate("submit");
        wrapper.update();
        expect(wrapper.find("textarea").prop("value")).toEqual("");
    })
})