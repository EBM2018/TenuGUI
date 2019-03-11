import Header from '../react/Widgets/Header/Header';
import React from 'react';
import renderer from 'react-test-renderer';


test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('does this render', ()=> {
    const component=renderer
        .create(<Header/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});
