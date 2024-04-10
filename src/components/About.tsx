import styled from "styled-components";
import GitProfile from "../models/GitProfile";
import { motion } from "framer-motion";

const VintageImage = styled.img`
  position: relative;
  top: 0;
  right: 0;
  left: 30%;
  height: 15em;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  filter: sepia(100%) contrast(75%) brightness(75%) saturate(0%);
`;

const About: React.FC<{ profile: GitProfile }> = ({ profile }) => {
  const firstName = "Josiah";
  const lastName = "Sparks";
  const firstLast = firstName + " " + lastName;

  const properCase = (str: string) => str.split(/\s+/)
    .map(word => word.length > 2 ? word.charAt(0).toUpperCase() + word.slice(1) : word) 
    .join(" ")

  return (
  <motion.div
    initial={{ x: "100vw" }}
    animate={{ x: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div className="content">
      <div className="collumns">
        <div className="collumn">
            <div className="head">
              <span className="headline hl1">From Math to Industry</span>
              <p>
                <span className="headline hl6">Sailing Into Software</span>
              </p>
            </div>
            Josiah began his software engineering career shortly after starting graduate 
            school in 2022. After a year of experience involving enterprise-level systems
            design, intense Java, and the Spring-React tech stack, he returned to graduate
            school. Now being just a few courses from getting his master's in applied math,
            he is pursuing further industry experience. This has been a journey of very 
            rewarding challenges, fascinating solutions, and plenty of coding. 
            <p />
          </div>
          <div className="collumn">
          <div className="head">
            <span className="headline hl1">Introducing Josiah</span>
            <p>
              <span className="headline hl6">{properCase(profile.bio)}</span>
            </p>
          </div>
          Josiah Sparks is a junior software engineer and a graduate student of Applied Math. 
          He spends his free time on multidisciplinary research, upskilling, and small data 
          science projects in Excel and Python. He believes in adding value, helping others, 
          and setting the team up for success. Josiah brings leadership, enterprise-level 
          experience, and strong work ethic to the team.
          <p />
          <VintageImage
            src={profile.avatar_url}
            alt=""
          />
          <p><a 
              href="https://drive.google.com/file/d/1x7LLA0QHj8aa2xQ7dtkylPp9B7yJ39Yz/view?usp=sharing"
              target="_blank"
            >
            <strong>Resume Download</strong>
          </a></p>
        </div>
        
        {/* <div className="collumn">
            <div className="head">
              <span className="headline hl1">Mathematical Journey</span>
              <p>
                <span className="headline hl6">Beyond The Buzzwords</span>
              </p>
            </div>
            <p />
          </div> */}
      </div>
    </div>
  </motion.div>);
}

export default About;