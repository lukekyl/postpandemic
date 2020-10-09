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
  //Dev Mode
  const railsURL = "http://localhost:3001";
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`${railsURL}/posts`)
      .then((response) => response.json())
      .then((postArray) => {
        console.log(postArray)
        return dispatch(success());
      });
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