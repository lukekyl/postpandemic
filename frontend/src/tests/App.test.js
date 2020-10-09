import React from "react";
import renderer from "react-test-renderer";
import App from "../App.js";


test('App fetches posts into redux state.', () => {

    const component = renderer.create(
      <App />
    );
    console.log(component.props.posts)
});

