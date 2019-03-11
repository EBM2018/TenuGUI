import MyDescription from '../react/Dashboard/MyDescription/MyDescription';
import React from 'react';
import renderer from 'react-test-renderer';

test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('does this render', ()=> {
    const component=renderer
        .create(<MyDescription/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});
