import { useState } from "react";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import "./styles.scss";

// Reference for this architecture:
// https://codesandbox.io/s/gifted-orla-hjpx0v?from-embed=&file=/src/App.js

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <>
      <div className={`app ${toggled ? "toggled" : ""}`}>
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
        <main>
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
          <div>
            {/* children passed in here from the prop */}
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
