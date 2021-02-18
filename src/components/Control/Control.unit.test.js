import React from 'react';
import renderer from 'react-test-renderer';

// Component
import Control from './Control';

describe('should render without crashing', () => {
    let component = renderer.create(
        <Control />
    );
    it('should render without crashing', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});