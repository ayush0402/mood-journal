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
            <div className="journals-list-text">
              <h2>Want to see what others are upto?</h2>
              <p>
                Read and relate to other people. Probably you can help them in
                some way too? Just drop a friendly comment.
              </p>
            </div>
            <div>
              {posts.map((post) => {
                return <PostCardView post={post} isPrivate={false} />;
              })}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PublicJournals;
