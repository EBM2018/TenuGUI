import ActTextField from '../react/Widgets/Activity/ActTextField.js';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, cleanup} from 'react-testing-library';

test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('ActTextField behaves as expected', ()=>{
    const component=renderer
        .create(<ActTextField id={1} text={'This is a test'}/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});