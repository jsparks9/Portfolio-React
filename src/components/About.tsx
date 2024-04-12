import { motion } from 'framer-motion';

const About = () => {
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
            <span className="headline hl1">
              Overview of This Website
            </span>
            <p>
              <span className="headline hl6">A React App</span>
            </p>
          </div>
          This website was designed to showcase the skills and traits of its 
          author, Josiah. It is built using React with the IDE VSCode. An 
          online template for the newspaper format was migrated to React as 
          were elements of its functionality. 
          <h4>
            Tech Used For This Website
          </h4>
          <ul>
            <li> VSCode </li>
            <li> TypeScript </li>
            <li> JavaScript </li>
            <li> CSS 3</li>
            <li> HTML 5</li>
            <li> React.js </li>
            <li> Packages </li>
            <ul>
              <li> Axios </li>
              <li> Framer-motion </li>
              <li> Styled-components </li>
            </ul>
          </ul>
        </div>

        <div className="collumn">
          <div className="head">
            <span className="headline hl1">Project Organization</span>
            <p>
              <span className="headline hl4">
                Neatly Placed Files
              </span>
            </p>
          </div>
          This app is a single page application (SPA) build with TypeScript. 
          The structure of this project is very standard. It has a folder for 
          components, which each dynamically produce a different part of the 
          page. It has just one model, the GitProfile object, in the models 
          folder. The remote folder contains TypeScript for Axios to make API 
          calls. And the router folder contains files necessary to switch 
          which page is being displayed within the app. 
          <p/>
          {new Array(9).fill(<br/>)}
          
        </div>

        <div className="collumn">
          <div className="head">
            <span className="headline hl1">Specific Features</span>
            <p>
              <span className="headline hl2">The Fun Stuff</span>
            </p>
          </div>
          <h4>Mobile Friendly</h4>
          <p>
            The navigation bar and article columns have customized CSS to accommodate 
            mobile use. Resize the window horizontally to observe these effects. {" "}
          </p>
          <h4>Navigation Bar</h4>
          <p>
            The navigation bar seems to snap to the top when scrolling. Actually, 
            there are two identical navigation bars. The one that snaps to the top
            is always at the top but invisible. When the page detects that the user
            has scrolled past the initial navigation bar, the invisible
            bar becomes visible and interactable. Then when one scrolls up again, 
            this bar returns to being invisible. {" "}
          </p>

          <h4>Dynamic Date</h4>
          <p>
            The date displayed at the top of the page is not static. Rather, it 
            renders dynamically based on the local date. {" "}
          </p>

          <h4>Page Switching Animation</h4>
          <p>
            This feature was implemented with the 'motion' import from the 
            Framer-motion package. It uses a simple initial, final, and 
            transition definition to produce the effect. 
          </p>
        </div>

      </div>
    </div>
  
  </motion.div>);
}

export default About;
