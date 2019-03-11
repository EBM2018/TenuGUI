import UserAccountWidget from '../react/Widgets/UserAccountWidget/UserAccountWidget';
import React from 'react';
import renderer from 'react-test-renderer';

test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('does this render', ()=>{
    const component=renderer
        .create(<UserAccountWidget/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});