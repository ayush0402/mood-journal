import { FaBars } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import "./styles.scss";
import meditate_image from "../../assets/meditate.svg"

const Meditation = ({
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
        <img src={meditate_image} alt=""/>
      </main>
    </div>
  );
};

export default Meditation;
