import { FaUserCircle } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { useEffect, useState } from "react";
const PostCommentView = ({ comment }) => {
  const [author, setAuthor] = useState();

  return (
    <>
      <IconContext.Provider value={{ size: 45 }}>
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <span>
            <FaUserCircle />
          </span>
          <span className="ms-2">
            <span>{comment.author_id}</span>
            <p className="text-muted">{comment.date}</p>
          </span>
        </div>
        <p>{comment.content}</p>
      </IconContext.Provider>
    </>
  );
};

export default PostCommentView;
