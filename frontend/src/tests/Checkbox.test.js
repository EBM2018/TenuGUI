import CheckBox from '../react/Widgets/Activity/CheckBox.js';
import React from 'react';
import renderer from 'react-test-renderer'

test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('CheckBox renders correctly', ()=>{
    const component=renderer
        .create(<CheckBox id={1} reponse={"test"} fctChecked={()=>{return 'lel'}}/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});
