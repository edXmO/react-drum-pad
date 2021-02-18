import React from 'react';
import renderer from 'react-test-renderer';


import Panel from '../Panel/Panel';

describe('should render all buttons without crashing', () => {
    let component = renderer.create(
        <Panel />
    );
    it('should render without crashing', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});