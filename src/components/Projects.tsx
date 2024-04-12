import { motion } from "framer-motion"
import { GitButton } from "./topmost/NavBarContent";
import styled from "styled-components";


const GitLink = styled.a`
  align-items: center;
  display: flex;
  text-decoration: none;
  color: inherit;

`

const Projects = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
    <div className="content">
      <div className="collumns">
          <div className="collumn max2cols">
              <div className="head">
                <span className="headline hl1">
                  Twitter Social Media API
                </span>
                <p>
                  <span className="headline hl4">A Spring Boot Project</span>
                </p>
              </div>
              <GitLink
                href={'https://github.com/jsparks9/Spring-Social-Media'}
                target='_blank'
              >
                <h3>GitHub Link</h3>        
                <GitButton/>
              </GitLink>

              <p>
                This team project entailed building a Spring Boot 3 API from scratch by following 
                an entity relationship diagram (ERD) and completing tasks listed in a Kanban board. 
                The primary objective was to create an 
                API that emulates the structure of Twitter's social media API.
                {" "}
              </p>
              <h4>
                Accomplishments
              </h4>
              <ul>
                <li>
                  Led group efforts by project planning and dividing up work in a balanced manner
                </li>
                <li>
                  Set up core infrastructure using deep Spring knowledge and POM.xml expertise
                </li>
                <li>
                  Implemented 8 API endpoints by writing compact, readable, and efficient code
                </li>
                <li>
                  Passed all 330 Postman integration tests through careful debugging of the API
                </li>
              </ul>
              <p><strong>Environment:</strong> Java 17, Spring Boot 3, JPA, PostgreSQL, PGAdmin, DBeaver, Postman, Git, IntelliJ, Maven</p>
            </div>

            <div className="collumn max2cols">
              <div className="head">
                <span className="headline hl1">Selenium Point Collection</span>
                <p>
                  <span className="headline hl4">Selenium Automation</span>
                </p>
              </div>
              <p>
                This project performs automated logins to the Talent LMS platform using the 
                Selenium framework implemented in Java. It involved deep OOP usage to 
                streamline webpage element identification and interaction. It uses deep
                Java concepts to maintain clean code and standard design principles. {" "}
              </p>
              <h4>
                Accomplishments
              </h4>
              <ul>
                <li>
                  Collected over 15,000 extra points in Talent LMS through over 600 automated logins
                </li>
                <li>
                  Used customized Gherkin steps to identify, click, and read webpage elements
                </li>
                <li>
                  Improved functionality with deep Java concepts such as Predicate, Runnable, and Lambda
                </li>
              </ul>
              <p><strong>Environment:</strong> Java 8, Selenium 4, Selenium WebDriver, Cucumber 7, Maven</p>
            </div>

            {/* <div className="collumn">
              <div className="head">
                <span className="headline hl1">NoteCard Rendering</span>
                <p>
                  <span className="headline hl4">A React App</span>
                </p>
              </div>
              <p>Project description</p>
            </div> */}
        </div>
      </div>
    </motion.div>);

};


export default Projects;