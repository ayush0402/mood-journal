import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import formatDate from "../utils/formatDate";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const PostCardView = ({ post, isPrivate, deletePostFromArray }) => {
  const { _id, title, content, date, sentiment } = post;
  const navigate = useNavigate();
  let sentimentDecimal = Number(sentiment.$numberDecimal);
  let variant = "Warning";
  if (sentimentDecimal > 0) variant = "Success";
  else if (sentimentDecimal < 0) variant = "Danger";

  const openPost = () => {
    navigate(`/dashboard/public-journals/${_id}`);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/post/delete/${_id}`);
      if (res.data.success) {
        deletePostFromArray(_id);
        alert(res.data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Card
        bg={variant.toLowerCase()}
        key={_id}
        text={variant.toLowerCase() === "warning" ? "dark" : "white"}
        style={{ cursor: "pointer" }}
        className="mb-2 post-card-view"
      >
        <Card.Header
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {formatDate(date)}
          {isPrivate && <FaTrashAlt onClick={handleDelete} />}
        </Card.Header>
        <Card.Body onClick={openPost}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content.slice(0, 100)}...</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCardView;
