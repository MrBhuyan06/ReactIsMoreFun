import React from "react";
import { COMMENTS_DATA } from "../config/config.js";
import Comment from "./Comment.js";

const CommentsList = ({ comment }) => {
  const arrCom = [];
  return (
    <div>
      {comment.map((comments, index) => {
        return (
          <>
            <Comment info={comments} />
            <div className="ml-10">
              <CommentsList key={index} comment={comments.replies} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CommentsList;

// {COMMENTS_DATA.forEach((com) => {
//     arrCom.push(<Comment info={com} />);
//   })}
//   {arrCom}
