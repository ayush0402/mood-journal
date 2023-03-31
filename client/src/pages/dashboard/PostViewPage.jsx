import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";

const PostViewPage = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});

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

  return (
    <DashboardLayout>
      <Container className="post-view-container">
        <p>{author.name}</p>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <p>{post.content}</p>
      </Container>
    </DashboardLayout>
  );
};

export default PostViewPage;
