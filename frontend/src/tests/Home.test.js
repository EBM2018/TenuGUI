
import React from 'react';
import renderer from 'react-test-renderer';
import Home from "../react/Home/Home";

test('Home renders as expected', () => {
    const component = renderer
        .create(<Home/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
test ('derp',()=>{
    expect('True').toBeTruthy;
});