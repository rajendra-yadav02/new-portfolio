import React from "react";
import { motion } from "framer-motion";
import video from "/img/video.jpg";
import Chat from "/img/Chat.png";
import study from "/img/study.jpg";
import weather from "/img/weather.jpeg";
import News from "/img/News.jpg";
import "./project.css";

const Project = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container project_container">
        <motion.article
          className="project_item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project_item_image">
            <img src={study} alt="Aavass-Flutter Project" />
          </div>
          <h3>Aavass-Flutter Project</h3>
          <small className="text-light">Final year project,Flutter, Dart</small>
          <div className="project_item_btn">
            <a href="https://github.com/rajendra-yadav02/final-year--project" className="btn">
              Github
            </a>
            
          </div>
        </motion.article>

        <motion.article
          className="project_item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project_item_image">
            <img src={video} alt="MusicPlayer App" />
          </div>
          <h3>MusicPlayer App</h3>
          <small className="text-light">
          Android studio, Java
          </small>
          <div className="project_item_btn">
            <a href="https://github.com/rajendra-yadav02/MusicPlayer" className="btn">
              Github
            </a>
            
          </div>
        </motion.article>

        <motion.article
          className="project_item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project_item_image">
            <img src={Chat} alt="Spotify_Clone" />
          </div>
          <h3>Spotify Clone</h3>
          <small className="text-light">
          Html, Css, JavaScript
          </small>
          <div className="project_item_btn">
            <a href="https://github.com/rajendra-yadav02/Spotify_Clone" className="btn">
              GitHub
            </a>
            
          </div>
        </motion.article>

        <motion.article
          className="project_item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project_item_image">
            <img src={weather} alt="Weather-App" />
          </div>
          <h3>Weather-App</h3>
          <small className="text-light">
          Javascript, Css, Html 
          </small>
          <div className="project_item_btn">
            <a href="https://github.com/rajendra-yadav02/Weather-App" className="btn">
              GitHub
            </a>
            <a
              href="https://weatherappbysourabh.netlify.app/"
              className="btn"
              style={{ marginLeft: "10px" }}
            >
              Live Demo
            </a>
          </div>
        </motion.article>
        <motion.article
          className="project_item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project_item_image">
            <img src={News} alt="React-News-App" />
          </div>
          <h3>News-WebApp</h3>
          <small className="text-light">
            React, Html ,JavaScript , Bootstrap
          </small>
          <div className="project_item_btn">
            <a href="https://github.com/rajendra-yadav02/news-app-News" className="btn">
              GitHub
            </a>
            <a
              href="https://reactnewsportal17.netlify.app/"
              className="btn"
              style={{ marginLeft: "10px" }}
            >
              Live Demo
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Project;
