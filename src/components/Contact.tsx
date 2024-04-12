import { motion } from "framer-motion";
import styled from "styled-components";
import './contactStyle.css';

const Wrapper = styled.div`
  font-family: "Arial", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-size: 75%;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-image: url('https://raw.githubusercontent.com/jsparks9/Portfolio-React/main/images/newspapers.jpg');
`;

const Container = styled.div`
  background: linear-gradient(
    to right,
    transparent,
    rgba(200, 200, 200),
    transparent
  );
  backdrop-filter: blur(2px);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
`;

const st = "josiah.sparks";
const ext = "my.utsa.edu"
const full = "mailto:" + st + "@" + ext

const Contact = () => {

  return(
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Wrapper>
        <Container>
          <h1>Get In Touch</h1>
          <form action={full} method="post">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </Container>
      </Wrapper>
  </motion.div>
  )
}

export default Contact;