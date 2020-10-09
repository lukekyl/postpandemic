// https://www.npmjs.com/package/redux-mock-store
// https://willowtreeapps.com/ideas/best-practices-for-unit-testing-with-a-react-redux-approach


import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// You would import the action from your codebase in a real scenario
const addPost = () => ({ type: 'ADD_POST' })
 
it('should dispatch action', () => {
 
  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)
 
  // Dispatch the action
  store.dispatch(addPost())
 
  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: 'ADD_POST' }
  expect(actions).toEqual([expectedPayload])
})



// You would import the action from your codebase in a real scenario
function success() {
  return {
    type: 'FETCH_DATA_SUCCESS'
  }
}
 
function fetchData () {
  //First run 'bundle exec rails s -p 3001' while in backend before testing
  return dispatch => {
    return fetch(`http://localhost:3001/posts`, {mode: 'no-cors',})
      .then(() => dispatch(success()));
  }
}

it('should execute fetch data', () => {
  const store = mockStore({})
 
  // Return the promise
  return store.dispatch(fetchData())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(success())
    })
})