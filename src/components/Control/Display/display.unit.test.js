import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('should render all buttons without crashing', () => {
    let component = renderer.create(
        <Display type={'VOL: 80%'} screenType={'display display__volume'} />
    );
    it('should render without crashing', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});