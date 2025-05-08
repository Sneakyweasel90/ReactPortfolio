import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';
import studentProjectImg from '../../assets/StudentsProject.png';
import databaseProject from '../../assets/DatabaseProject.png';
import phpProject from '../../assets/phpProject.png';

function Projects() {
    return (
        <div className="Projects-Page">
            <section className="projects-section bg-light" id="projects">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <a href="https://github.com/Sneakyweasel90/StudentProject.git">
                                <img className="img-fluid" src={studentProjectImg} alt="Student Project" />
                            </a>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Student Project</h4>
                                <p className="text-black-50 mb-0">
                                    This C# project was to make a Student registration form. Add new students, updating previous, 
                                    and deleting students was the main focus.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div className="col-lg-6">
                            <a href="https://github.com/Sneakyweasel90/DatabaseCSharp.git">
                                <img className="img-fluid" src={databaseProject} alt="Database Project" />
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white">Database Project</h4>
                                        <p className="mb-0 text-white-50">
                                            Developing a C# project using entity frameworks. Using entity frameworks 
                                            and hitting a database to pull back information and displaying it was the main focus of this project.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 justify-content-center">
                        <div className="col-lg-6">
                            <a href="https://github.com/Sneakyweasel90/PhPProject.git">
                                <img className="img-fluid" src={phpProject} alt="php Project" />
                            </a>
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">PhP Project</h4>
                                        <p className="mb-0 text-white-50">
                                            For this project. Creating a website that functions like twitter. 
                                            Implementing Object orientation, AJAX, Javascript, HTML, CSS and mySql. With functionality such as posting tweets, retweeting and following other users.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
