import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import IssueDetails from "./Pages/IssueDetails/IssueDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route
          path="/project/:projectId/issue/:issueId"
          element={<IssueDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
