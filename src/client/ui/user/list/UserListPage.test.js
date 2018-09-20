import React from 'react';
import UserListPage from './UserListPage';
import configureMockStore from 'redux-mock-store'
import renderer from 'react-test-renderer';

const mockStore = configureMockStore()

describe('UserListPage', () => {

    it('renders correctly', () => {

        const store = mockStore({ 
            users: {
                list: {
                    items: [
                        { id: 1, firstName: 'Jack', lastName: 'Johnson' }
                    ]
                }
            }
        })

        store.dispatch = jest.fn();

        const tree = renderer
            .create(<UserListPage store={store} />)
            .toJSON();

        expect(store.dispatch.mock.calls.length).toBe(1);

        expect(tree).toMatchSnapshot();
    });

});