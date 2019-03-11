import Notification from '../react/FishtankAdmin/Notification/Notification';
import React from 'react';
import renderer from 'react-test-renderer';

test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('does this render', ()=>{
    const component=renderer
        .create(<Notification/>);
    let tree=component.toJSON();
});
