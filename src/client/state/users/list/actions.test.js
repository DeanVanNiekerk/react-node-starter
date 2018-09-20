import configureMockStore from 'redux-mock-store'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from './actions'

const middlewares = [ thunk, apiMiddleware ]
const mockStore = configureMockStore(middlewares)

describe('user list actions', () => {
  
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should dispatch USERS_LIST_RECEIVE when fetchUsers is called', () => {

    const store = mockStore({})

    const body = [
        { id: '1', firstName: 'Jack', lastName: 'Jones'}
    ]

    fetchMock.getOnce(`api/users`, { body: body })

    const expectedActions = [
      {type: actions.USERS_LIST_FETCHING},
      {type: actions.USERS_LIST_RECEIVE, payload: body}
    ]

    return store.dispatch(actions.fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})