import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="button-grid">
                    <div className="button-with-image">
                        <img src="/images/website.jpg" alt="website" className="pictures-rounded hide" />
                        <Link to="/CSharpProject" className="home-button">
                        C# Project
                        </Link>
                    </div>
                    <div className="button-with-image">
                        <Link to="/physicians" className="home-button">
                        Physicians
                        </Link>
                        <img src="/images/phys.jpg" alt="Physicians" className="pictures-rounded hide"/>
                    </div>
                    <div className="button-with-image">
                        <img src="/images/patients.jpg" alt="patients" className="pictures-rounded hide"/>
                        <Link to="/patients" className="home-button">
                        Patients
                        </Link>
                    </div>
                    <div className="button-with-image">
                        <Link to="/orders" className="home-button">
                        Orders
                        </Link>
                        <img src="/images/orders.jpg" alt="orders" className="pictures-rounded hide" />
                    </div>
                    <div className="button-with-image">
                        <img src="/images/verification.jpg" className="pictures-rounded hide"/>
                        <Link to="/verification" className="home-button">
                        Verification
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;