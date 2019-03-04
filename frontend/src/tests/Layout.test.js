import Layout from '../react/Layout/Layout.js';
import React from 'react'
import renderer from 'react-test-renderer'
test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('Layout renders correctly', ()=>{
    const component=renderer
        .create(<Layout children={null}/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});
