import Root from "root";
import App from "components/App";

import moxios from "moxios";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest("http://jsonplaceholder.typicode.com/comments",{
        status: 200,
        response : [
            {name : "fetch 1",}
            ,{name : "fetch 2",},
        ],
    });
})

afterEach(()=>{
    moxios.uninstall();
})

it("fetches the comments from the api and displays them",(done)=>{
    const wrapper = mount(
        <Root>
            <App/>
        </Root>
    );

    wrapper.find(".fetchButton").simulate("click");

    moxios.wait(()=>{
        wrapper.update();
        expect(wrapper.find("li").length).toEqual(2);
        wrapper.unmount();
        done();
    })

})