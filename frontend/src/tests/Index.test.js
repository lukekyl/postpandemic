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
