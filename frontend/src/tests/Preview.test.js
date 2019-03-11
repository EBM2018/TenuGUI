import Preview from '../react/FishtankAdmin/Preview/Preview';
import React from 'react';
import renderer from 'react-test-renderer';

test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('does this render', ()=>{
    const component= renderer
        .create(<Preview/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});
