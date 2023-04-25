import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import PostCardView from "../../components/PostCardView";

const PublicJournals = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/post/all");
        // Reversing as to get latest post on the top.
        response.reverse();
        setPosts(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            {posts.map((post) => {
              return <PostCardView post={post} isPrivate={false} />;
            })}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PublicJournals;
