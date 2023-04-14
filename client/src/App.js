import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import WriteNew from "./pages/dashboard/WriteNew";
import PublicJournals from "./pages/dashboard/PublicJournals";
import PostViewPage from "./pages/dashboard/PostViewPage";
import CalendarView from "./pages/dashboard/CalendarView";
import Uplift from "./pages/dashboard/Uplift";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Meditate from "./pages/dashboard/uplift/Meditate";

import axios from "axios";
function App() {
  axios.defaults.baseURL = "http://localhost:5000/";

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
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home testimonies={testimonies} />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/dashboard/write-new"
            element={
              <ProtectedRoute>
                <WriteNew />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/public-journals/:postId"
            element={
              <ProtectedRoute>
                <PostViewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/public-journals"
            element={
              <ProtectedRoute>
                <PublicJournals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/calendar-view"
            element={
              <ProtectedRoute>
                <CalendarView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift/meditate"
            element={
              <ProtectedRoute>
                <Meditate/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift"
            element={
              <ProtectedRoute>
                <Uplift />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
