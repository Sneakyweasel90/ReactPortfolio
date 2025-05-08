import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import mountains from '../../assets/mountains.jpeg';

function Home() {
    return (
        <div className="home-container">

            <section
                className="section mountain-section d-flex justify-content-center align-items-center text-black"
                style={{
                    background: `url(${mountains}) no-repeat center center`,
                    backgroundSize: 'cover'
                }}
            >
                <div className="text-center">
                    <h1 className="display-3">Hi, I'm Neil Mannion</h1>
                    <p className="lead">Frontend Developer | React | UI/UX</p>
                </div>
            </section>

            {/* About Section */}
            <section className="section about-section bg-light d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h2>About Me</h2>
                    <p className="w-75 mx-auto">
                        I joined the Canadian Military at the age of 18 and completed 14 and a half years as an electrician. 
                        Completing multiple tours as well as becoming an instructor for 3 years. 
                        Recognizing the military was not for me I decided to take my passion for computers to the next level and complete a programming course. 
                        I graduated New Brunswick Community College in 2025 and currently having fun with learning new ideas and learning more every day.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section projects-section d-flex justify-content-center align-items-center text-white bg-dark">
                <div className="text-center">
                    <h2>Projects</h2>
                    <p>Click this <Link to='/projects'>link</Link> to see all my projects!</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section contact-section bg-light d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h2>Contact</h2>
                    <p>Let's work together! Reach out via email or social media.</p>
                </div>
            </section>

        </div>
    );
}

export default Home;
