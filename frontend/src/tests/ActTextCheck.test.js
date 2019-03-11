import ActTextCheck from '../react/Widgets/Activity/ActTextCheck';
import React from 'react';
import renderer from 'react-test-renderer';

test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('does this render', ()=> {
    const component=renderer
        .create(<ActTextCheck list_reponse={"yes"} text={"maybe"}/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});