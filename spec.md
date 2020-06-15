# Requirements
- The code should be written in ES6 as much as possible
- Use the create-react-app generator to start your project.
- Follow the instructions on this repo to setup the generator: create-react-app
- Your app should have one HTML page to render your react-redux application
- There should be 2 container components
- There should be 5 stateless components
- There should be 3 routes
- The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs; docs for v4 can be found here)
- Use Redux middleware to respond to and modify state change
- Make use of async actions and redux-thunk middleware to send data to and receive data from a server
- Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
- Your client-side application should handle the display of data with minimal data manipulation
- Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!



To Do:

Home Page 
    - Get animation timer down so no overlapping posts
    - filter posts by date before slice (newest)
    - add additional filters to filter bar
    - add any other additional info to cards (date, votes?)

Show Page
    - add any additional pieces to show container (back button, next post?)
    - add votes count and add/remove vote button to card (add vote functionality to managePosts reducer)

Add Post

Search Posts


CSS
    - Post size on home page/show page in % vs px?