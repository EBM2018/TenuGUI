import MyActions from '../react/Dashboard/MyActions/MyActions';
import React from 'react';
import renderer from 'react-test-renderer';


test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('does this render', ()=> {
    const component=renderer
        .create(<MyActions/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});