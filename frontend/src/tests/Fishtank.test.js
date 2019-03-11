import Fishtank from '../react/Fishtank/Fishtank';
import React from 'react';
import renderer from 'react-test-renderer';


test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('does this render', ()=> {
    const component=renderer
        .create(<Fishtank/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});