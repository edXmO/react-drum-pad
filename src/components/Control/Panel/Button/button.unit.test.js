import React from 'react';
import renderer from 'react-test-renderer';

// Component
import Button from './Button';

describe('should render without crashing', () => {
    let component = renderer.create(
        <Button type={'Volume'} text={'+VOL'} />
    );
    it('should render without crashing', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});