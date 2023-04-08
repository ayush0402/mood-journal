import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useEffect, useState } from "react";
import axios from "axios";
import formatDate from "../utils/formatDate";
const PostCommentView = ({ comment }) => {
  const [author, setAuthor] = useState({});
  const authorId = comment.author_id;

  useEffect(() => {
    const fetchAuthor = async () => {
      const { data: response } = await axios.get("/auth/get-user-by-id", {
        params: {
          id: authorId,
        },
      });
      setAuthor(response[0]);
    };

    fetchAuthor();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ size: 45 }}>
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <span>
            <FaUserCircle />
          </span>
          <span className="ms-2">
            <span>{author.name}</span>
            <p className="text-muted">{formatDate(comment.date)}</p>
          </span>
        </div>
        <p>{comment.content}</p>
      </IconContext.Provider>
    </>
  );
};

export default PostCommentView;
