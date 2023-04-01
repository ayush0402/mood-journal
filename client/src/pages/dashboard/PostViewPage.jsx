import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import { useUserAuth } from "../../contexts/UserAuthContext";
import PostCommentView from "../../components/PostCommentView";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const PostViewPage = () => {
  const { postId } = useParams();
  const { user } = useUserAuth();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState({});
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      axios
        .get("/post/get-post-by-id", {
          params: {
            id: postId,
          },
        })
        .then((res) => {
          // TODO: Check if this can be optimised to single GET request using nested schemas.
          const _post = res.data[0];
          setPost(_post);
          setComments(_post.comments);
          const authorId = _post.author_id;
          return axios.get("/auth/get-user-by-id", {
            params: { id: authorId },
          });
        })
        .then((res) => {
          const _author = res.data[0];
          setAuthor(_author);
        })
        .catch((err) => {
          console.log("Error fetching post data", err);
        });

      setLoading(false);
    };

    fetchData();
  }, []);

  const submitComment = async (e) => {
    e.preventDefault();
    let userId = "";
    try {
      const userResponse = await axios.get("auth/get-user-by-email", {
        params: {
          email: user.email,
        },
      });
      userId = userResponse.data[0]._id;
    } catch (error) {
      console.log("Error fetching user by email", error);
    }
    try {
      const res = await axios.post("/post/add-new-comment", {
        postId: postId,
        content: newComment,
        userId: userId,
      });
      const updatedPost = res.data[0];
      const updatedComments = updatedPost.comments;
      setPost(updatedPost);
      setComments(updatedComments);
    } catch (error) {
      console.log("Error posting the comment", error);
    }
  };

  return (
    <DashboardLayout>
      <Container className="post-view-container">
        <IconContext.Provider value={{ size: 45 }}>
          <Card className="mb-3 shadow post-data-card">
            <Card.Body>
              <Card.Title>
                <h2>{post.title}</h2>
              </Card.Title>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <span>
                  <FaUserCircle />
                </span>
                <span className="ms-2">
                  <span>{author.name}</span>
                  <p className="text-muted">{post.date}</p>
                </span>
              </div>

              <Card.Text className="mt-2" style={{ minHeight: 200 }}>
                {post.content}
              </Card.Text>
              <hr />
              <Form onSubmit={submitComment}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className="text-center">
                    Add a new comment:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Type your comment here..."
                    onChange={(event) => setNewComment(event.target.value)}
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </IconContext.Provider>
        <Card className="shadow">
          <Card.Body>
            <Card.Subtitle>Comments</Card.Subtitle>
            {comments.map((comment) => {
              return <PostCommentView comment={comment} />;
            })}
          </Card.Body>
        </Card>
      </Container>
    </DashboardLayout>
  );
};

export default PostViewPage;
