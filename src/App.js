import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import WriteNew from "./pages/dashboard/WriteNew";
import PublicJournals from "./pages/dashboard/PublicJournals";
import CalendarView from "./pages/dashboard/CalendarView";
import Meditation from "./pages/dashboard/Meditation";

function App() {
  const testimonies = [
    {
      name: "John Doe",
      review:
        "Simple easy to use journal website with a clean and user friendly UI. One can make daily entries easily and and can capture the mood of the writer pretty accurately.",
    },
    {
      name: "Ayush Kumar",
      review:
        "It was a pleasure working with the entire MoodJournal development team. They were able to launch our iOS app in a few months and it looks and works beautifully. ",
    },
    {
      name: "Marty",
      review:
        "An amazing and thoughful app.It helps to express myself only to me with full security.",
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home testimonies={testimonies} />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard/write-new" element={<WriteNew />} />
        <Route path="/dashboard/public-journals" element={<PublicJournals />} />
        <Route path="/dashboard/calendar-view" element={<CalendarView />} />
        <Route path="/dashboard/meditate" element={<Meditation />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
