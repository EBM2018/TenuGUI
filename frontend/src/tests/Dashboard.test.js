import Dashboard from '../react/Dashboard/Dashboard';
import React from 'react';
import renderer from 'react-test-renderer';



test ('derp',()=>{
    expect('True').toBeTruthy;
});

test('does this render', ()=> {
    const component=renderer
        .create(<Dashboard/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});