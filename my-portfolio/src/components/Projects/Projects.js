import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio"
              description="Modern Portfolio built with HTML, CSS, and JavaScript. Fully responsive design featuring sleek animations, interactive elements, and a user-friendly interface. Perfect for showcasing projects and skills effectively across all devices."
              ghLink="https://github.com/shehab-A-alsanuury/shehab-A-alsanuury-shehab-A-alsanuury-Portfolio-project-1-.githup.io"
              demoLink="https://shehab-a-alsanuury.github.io/shehab-A-alsanuury-shehab-A-alsanuury-Portfolio-project-1-.githup.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NESTQUEST"
              description="A travel rooms holiday booking project built with HTML, CSS, and JavaScript, leveraging JSON data for booking information. The app features a user-friendly interface for searching and reserving holiday accommodations. LocalStorage is used to save and manage user preferences and booking details seamlessly."
              ghLink="https://github.com/mohammadnoorsaqer/javascript-project"
              demoLink="https://shehab-a-alsanuury.github.io/NESTQUEST.githup.io/NESTQUEST-main/NESTQUEST-main/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Feane"
              description="Created a mock-up web application to showcase my skills in HTML, CSS, and JavaScript. The design is modern and responsive, featuring dynamic animations and interactive elements. This project highlights my ability to craft visually appealing and functional web experiences, demonstrating creativity and technical expertise."
              ghLink="https://github.com/shehab-A-alsanuury/shehab-A-alsanuury-shehab-A-alsanuury-restaurant-task-html-css.githup.io"
              demoLink="https://shehab-a-alsanuury.github.io/shehab-A-alsanuury-shehab-A-alsanuury-restaurant-task-html-css.githup.io/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Pokémon "
              description="Developed a dynamic **Pokémon Information Website** using the **Pokémon API** and **PHP**. The platform allows users to search for and explore detailed information about their favorite Pokémon. Each Pokémon is accompanied by a comprehensive profile, including its stats, abilities, and evolutions. The site is designed with a user-friendly interface, ensuring smooth navigation and an immersive experience for Pokémon fans. With a clean, modern layout powered by **PHP**, users can seamlessly explore data from the vast Pokémon universe, making it the ultimate resource for enthusiasts."              
              ghLink="https://github.com/shehab-A-alsanuury/Pok-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Moviesx"
              description="Developed a movie website using PHP, Laravel, React, HTML, CSS, and JavaScript, with MySQL as the database. The platform allows users to explore movie details, watch trailers, and browse content dynamically. The site features an interactive and responsive design with smooth transitions and a user-friendly interface, showcasing my full-stack development skills."
              ghLink="https://github.com/mohammadnoorsaqer/ReactProject"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Netflix Clone"
              description="A fully functional Netflix clone built using **Laravel**, **HTML**, **CSS**, **JS**, and **APIs**. This platform allows users to browse movies, TV shows, and manage their watchlist, with features like user authentication, streaming capabilities, and a responsive design. The backend is built with **Laravel**, ensuring smooth API integration and secure user management. The project also features a clean, modern interface powered by **HTML**, **CSS**, and **JS** for a seamless browsing experience."
              ghLink="https://github.com/shehab-A-alsanuury/netflix_clone_laravel"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
