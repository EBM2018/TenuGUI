import MyActivity from '../react/Dashboard/MyActivity/MyActivity';
import React from 'react';
import renderer from 'react-test-renderer';

test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('does this render', ()=> {
    const component=renderer
        .create(<MyActivity/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});