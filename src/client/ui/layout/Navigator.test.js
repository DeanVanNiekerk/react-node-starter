import React from 'react';
import Navigator from './Navigator';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom' 

describe('Navigator', () => {

    it('renders correctly', () => {

        const tree = renderer
            .create(<Router><Navigator /></Router>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

});