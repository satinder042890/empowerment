import React from "react";
import Songs from "./Songs/Songs.js";
import Search from './Search/Search.js';

const Musix= () => {
  return (
    <React.Fragment>
      <Search />
      <Songs/>
    </React.Fragment>
  );
};

export default Musix;