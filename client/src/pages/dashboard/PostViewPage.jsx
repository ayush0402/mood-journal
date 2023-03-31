import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";

const PostViewPage = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/post/get-post-by-id", {
          params: { id: postId },
        });
        setPost(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return <DashboardLayout>{postId}</DashboardLayout>;
};

export default PostViewPage;
