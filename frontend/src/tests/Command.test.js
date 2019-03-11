import Command from '../react/FishtankAdmin/Command/Command';
import React from 'react';
import renderer from 'react-test-renderer';


test ('derp',()=>{
    expect('True').toBeTruthy;
});

test('does this render', ()=> {
    const component=renderer
        .create(<Command/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});