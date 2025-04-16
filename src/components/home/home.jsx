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
                        I'm passionate about building beautiful and functional web experiences using React and modern technologies.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section projects-section d-flex justify-content-center align-items-center text-white bg-dark">
                <div className="text-center">
                    <h2>Projects</h2>
                    <p>Here are a few cool things I've built recently.</p>
                    {/* Add project previews or cards later */}
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
