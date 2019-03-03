import ButtonLayout from '../react/Fishtank/ButtonLayout/ButtonLayout';
import renderer from 'react-test-renderer';
import React from 'react';

test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('renders correctly', ()=>{
    const component=renderer
        .create(<ButtonLayout/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});