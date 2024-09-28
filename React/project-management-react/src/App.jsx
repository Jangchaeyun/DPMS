import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import IssueDetails from "./Pages/IssueDetails/IssueDetails";
import Subscription from "./Pages/Subscription/Subscription";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <>
      {false ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/project/:projectId/issue/:issueId"
              element={<IssueDetails />}
            />
            <Route path="/upgrade_plan" element={<Subscription />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
