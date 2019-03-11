import FishtankHeader from '../react/Widgets/FishtankHeader/FishtankHeader';
import React from 'react';
import renderer from 'react-test-renderer';


test ('derp',()=>{
    expect('True').toBeTruthy;
});
test('does this render', ()=> {
    const component=renderer
        .create(<FishtankHeader date={"12/03/2019"} subject={"Testing in JS"}/>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});
