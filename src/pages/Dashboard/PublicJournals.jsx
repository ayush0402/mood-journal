import { FaBars } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import "./styles.scss";

const PublicJournals = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  return (
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
        <h1>Public Journals</h1>
      </main>
    </div>
  );
};

export default PublicJournals;
