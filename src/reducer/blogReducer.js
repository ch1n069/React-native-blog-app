import React, { useReducer } from "react";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    case "REMOVE_BLOGPOST":
      return [...state, { title: `Blog Post #${state.length - 1}` }];
    default:
      return state;
  }
};

export default blogReducer;
