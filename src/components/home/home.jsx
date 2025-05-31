import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const projects = [
  { id: '1', title: 'Student Project', description: 'Student Project' },
  { id: '2', title: 'Database Project', description: 'Database Project' },
  { id: '3', title: 'PHP Project', description: 'PHP Project' },
];

function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* examples.motion.dev/react/scroll-linked */}
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: 'left',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          backgroundColor: '#ff0088',
          zIndex: 9999
        }}
      />

      <div className="home-container">
        <div className="section mountain-section d-flex justify-content-center align-items-center text-white">
          <div className="text-center">
            <h1 className="display-3">Hi, I'm Neil Mannion</h1>
            <p className="lead">Programmer Analyst | Software Developer</p>
          </div>
        </div>

        <div className="section about-section bg-light-gray d-flex justify-content-center align-items-center text-white">
          <div className="text-center">
            <h2>About Me</h2>
            <p className="w-75 mx-auto">
              I joined the Canadian Military at the age of 18 and completed 14 and a half years as an electrician.
              Completing multiple tours as well as becoming an instructor for 3 years.
              Recognizing the military was not for me I decided to take my passion for computers to the next level and complete a programming course.
              I graduated New Brunswick Community College in 2025 and currently having fun with learning new ideas and learning more every day.
            </p>
          </div>
        </div>

        <div className="section projects-section d-flex justify-content-center align-items-center text-white bg-dark flex-column">
          <h2>Projects</h2>

          <div className="project-cards">
            {projects.map(project => (
              <motion.div
                key={project.id}
                layoutId={project.id}
                onClick={() => setSelectedId(project.id)}
                className="project-card"
              >
                <h4>{project.title}</h4>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={selectedId}
                onClick={() => setSelectedId(null)}
                className="project-modal-overlay"
              >
                <motion.div className="project-modal">
                  <h2>{projects.find(p => p.id === selectedId).title}</h2>
                  <p>{projects.find(p => p.id === selectedId).description}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="section api-section bg-light-gray d-flex justify-content-center align-items-center text-white">
          <div className="text-center">
            <h2>API Hits</h2>
            <p>REST API <Link to='/apiHit'>examples</Link> </p>
          </div>
        </div>

        <div className="section contact-section bg-light-gray d-flex justify-content-center align-items-center text-white">
          <div className="text-center">
            <h2>Contact</h2>
            <p>Let's work together! Reach out via email or social media.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
