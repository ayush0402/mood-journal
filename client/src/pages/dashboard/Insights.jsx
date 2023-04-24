import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
        <div>
          {loading && <div>Loading</div>}
          {!loading && (
            <Row>
              <Col xs={12} xl={6}>
                <h1>Mood Chart</h1>
                <GraphView posts={posts} />
              </Col>
              <Col xs={12} xl={6}>
                <h1>Calendar</h1>
                <Calendar posts={posts} />
              </Col>
            </Row>
          )}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Insights;
