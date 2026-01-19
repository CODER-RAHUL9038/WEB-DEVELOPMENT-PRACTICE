import { useState } from "react";
import CommentForm from "./CommentsForm";
import "./Comment.css";

export default function Comment() {
  const [comments, setComments] = useState([
    { username: "Rahul", remarks: "Not so good", rating: 3 },
  ]);

  const addNewComment = (comment) => {
    setComments((prev) => [...prev, comment]);
  };

  return (
    <div className="comment-container">
      <h3>All Comments</h3>

      {comments.map((comment, idx) => (
        <div key={idx} className="comment-card">
          <p className="remarks">{comment.remarks}</p>
          <span className="rating">⭐ {comment.rating}/5</span>
          <p className="username">@{comment.username}</p>
        </div>
      ))}

      <CommentForm addNewComment={addNewComment} />
    </div>
  );
}
