import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shehab Alsanuury </span>
            from <span className="purple">Jordan.</span>
            <br />
            I’m a passionate learner, always exploring the endless possibilities that technology brings to life. 🚀
            <br />
            Every day is an opportunity to grow, create, and leave a mark.
            <br />
            <br />
            Here are a few activities that I truly enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Discovering new skills and pushing boundaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Immersing myself in inspiring stories through travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Connecting with others by sharing ideas and stories
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to make every step a meaningful one!"{" "}
          </p>
          <footer className="blockquote-footer">Shehab Alsanuury</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
