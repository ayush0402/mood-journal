import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
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
            <>
              <h2 className="mt-3 mb-3">Track your feelings!</h2>
              <Row className="mb-5 mt-2">
                <Col xs={12} xl={8}>
                  <GraphView posts={posts} />
                </Col>
                <Col xs={12} xl={4} className="journals-list-text">
                  <h1>Mood Chart</h1>
                  <p>
                    This graph provides insights into your mood over a period of
                    time. Positive values on the graph indicate that the user
                    experienced a good mood, while negative values suggest a
                    not-so-good mood. By tracking these values, the you can gain
                    insights into your emotional well-being and identify any
                    patterns or triggers that may be impacting your mood.
                  </p>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} xl={4} className="journals-list-text">
                  <h1>Calendar</h1>
                  <p>
                    This calendar tracks the your mood on a daily basis, with
                    red indicating a negative or bad mood, yellow representing a
                    neutral mood, and green indicating a positive or good mood.
                    By using these colors to represent you mood, the you can
                    easily visualize patterns and trends in your emotional
                    well-being over time.
                  </p>
                </Col>
                <Col xs={12} xl={8}>
                  <Calendar posts={posts} />
                </Col>
              </Row>
            </>
          )}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Insights;
