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
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About profile={profile} />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesWithAnimation;