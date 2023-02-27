import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import NotFound from "../NotFound";
import "./styles.scss";

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <Sidebar
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <Routes>
          <Route path="/dashboard/write" component={SignUp} />
          <Route path="/dashboard/public-journals" component={LogIn} />
          <Route path="/not-found" component={NotFound} />
          {/* <Route path="/" exact>
            <Home image={image} handleImageChange={handleImageChange} />
          </Route>
          <Redirect to="/not-found" /> */}
        </Routes>

        {/* <Routes>
          <Route path="/write-new" element={<LogIn />} />
          <Route path="/dashboard/public-journals" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      </main>
    </div>
  );
}

export default Dashboard;
