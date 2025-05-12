import 'bootstrap/dist/css/bootstrap.min.css';
import './apiHit.css';
import { useEffect, useState } from 'react';

function apiHit() {

    const [dogImage, setDogImage] = useState('');
    const [foxImage, setFoxImage] =useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setDogImage(data.message))
            .catch(error => console.error('Error fetching images of dogs', error));
    }, []);

    useEffect(() => {
        fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => setFoxImage(data.image))
        .catch(error => console.error('Error fetching images of foxes', error));
    }, []);

    return (
        <div className="home-container">

            {/* API Dog Section */}
                <div className="text-center">
                    <h2>Just some friendly dogs!</h2>
                        {dogImage ? (
                            <img src={dogImage} alt='RandomDog' className='custom-animal-image'/>
                        ) : (
                            <p>Loading...</p>
                        )}
                </div>

            {/* API Dog Section */}
                <div className="text-center">
                    <h2>Just some friendly foxes!</h2>
                        {foxImage ? (
                            <img src={foxImage} alt='RandomFox' className='custom-animal-image'/>
                        ) : (
                            <p>Loading...</p>
                        )}
                </div>
        </div>
    );
}

export default apiHit;