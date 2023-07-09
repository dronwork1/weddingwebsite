import './HomePage.css'
import {useEffect, useState} from "react";
import axios from 'axios';
const HomePage =() => {
    const [onAnimation, setOnAnimation] = useState(false);

    useEffect (() => {
        axios.get(`https://64aaeacd0c6d844abedefaf6.mockapi.io/api/v1/guests/1`) .then(res => {
        });
    }, []);

    const onFireworkClick = () => {
        if (!onAnimation) {
            setOnAnimation(true);
            setTimeout(() => setOnAnimation(false), 1750)
        }
    }

    return(
        <div >
            <div className="homepage">
                <p className='homePageText'>
                    Совсем скоро
                </p>
            <div className='oval' onClick={onFireworkClick}>
                <p className='homePageText'>
                    тут
                </p>
            </div>
            <p className='homePageText'>
                что-то будет...
            </p>

            </div>
            {onAnimation && <>
                <div className="firework"></div>
                <div className="firework"></div>
                <div className="firework"></div>
            </>}
        </div>
    )
}

export default HomePage;
