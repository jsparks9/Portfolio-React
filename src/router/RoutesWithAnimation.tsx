import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "../components/Landing";
import About from "../components/About";
import GitProfile from "../models/GitProfile";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const RoutesWithAnimation: React.FC<{ profile: GitProfile }> = ({ profile }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/Portfolio-React" element={<Landing />} />
      <Route path="/Portfolio-React/about" element={<About profile={profile} />} />
      <Route path="/Portfolio-React/projects" element={<Projects />} />
      <Route path="/Portfolio-React/contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesWithAnimation;