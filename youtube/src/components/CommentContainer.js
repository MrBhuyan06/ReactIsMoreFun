import React from "react";

import CommentsList from "./CommentsList.js";
import { COMMENTS_DATA } from "../config/config.js";

const CommentContainer = () => {
  return (
    <div>
      <CommentsList comment={COMMENTS_DATA} />
    </div>
  );
};
export default CommentContainer;
