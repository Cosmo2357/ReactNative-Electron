import React, { useState, createContext } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";

export const PostsContext = createContext();

export const PostsProvider = (props) => {
  const [allPosts, setAllPosts] = useState([]);

  const value = {
    allPosts,
    setAllPosts,
  };
  return (
    <PostsContext.Provider value={value}>
      {props.children}
    </PostsContext.Provider>
  );
};
