import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import WriteNew from "./pages/Dashboard/WriteNew";
import PublicJournals from "./pages/Dashboard/PublicJournals";
import CalendarView from "./pages/Dashboard/CalendarView";
import Meditation from "./pages/Dashboard/Meditation";

function App() {
  const testimonies = [
    {
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus voluptatem rerum beatae quae alias iste tempora.",
    },
    {
      name: "Ayush Kumar",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus voluptatem rerum beatae quae alias iste tempora.",
    },
    {
      name: "Marty",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus voluptatem rerum beatae quae alias iste tempora.",
    },
  ];

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
      <Routes>
        <Route path="/" element={<Home testimonies={testimonies} />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/dashboard/write-new"
          element={
            <WriteNew
              collapsed={collapsed}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
            />
          }
        />
        <Route
          path="/dashboard/public-journals"
          element={
            <PublicJournals
              collapsed={collapsed}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
            />
          }
        />
        <Route
          path="/dashboard/calendar-view"
          element={
            <CalendarView
              collapsed={collapsed}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
            />
          }
        />
        <Route
          path="/dashboard/meditate"
          element={
            <Meditation
              collapsed={collapsed}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
            />
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
