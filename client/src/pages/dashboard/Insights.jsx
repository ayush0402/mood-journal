import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Calendar from "../../components/Calendar";
import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import { useUserAuth } from "../../contexts/UserAuthContext";
import GraphView from "../../components/GraphView";

const Insights = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useUserAuth();
  const [loading, setLoading] = useState(true);

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
        setPosts(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [user.email]);

  return (
    <>
      <DashboardLayout>
        <Container>
          <div>
            {loading && <div>Loading</div>}
            {!loading && (
              <div>
                <h1>Graph View</h1>
                <GraphView posts={posts} />
                <h1>Calendar View</h1>
                <Calendar posts={posts} />
              </div>
            )}
          </div>
        </Container>
      </DashboardLayout>
    </>
  );
};

export default Insights;
