import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import PostCardView from "../../components/PostCardView";
import { useUserAuth } from "../../contexts/UserAuthContext";

const PrivateJournals = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { user } = useUserAuth();

  const deletePostFromArray = (id) => {
    const updatedPosts = posts.filter((post) => post._id !== id);
    setPosts(updatedPosts);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let userId = "";
      try {
        const authResponse = await axios.get("auth/get-user-by-email", {
          params: {
            email: user.email,
          },
        });
        userId = authResponse.data[0]._id;
      } catch (error) {
        console.log("Error fetching user by email", error);
      }
      try {
        const { data: response } = await axios.get("/post/get-posts-by-user", {
          params: {
            user_id: userId,
          },
        });
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
              return (
                <PostCardView
                  post={post}
                  isPrivate={true}
                  deletePostFromArray={deletePostFromArray}
                />
              );
            })}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PrivateJournals;
