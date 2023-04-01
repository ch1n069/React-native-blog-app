import React, { useReducer } from "react";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case "REMOVE_BLOGPOST":
      return [state.filter((blogPost) => blogPost.id !== action.payload)];
    default:
      return state;
  }
};

export default blogReducer;
