import './index.css';
import { Link } from 'react-router-dom';
import Topbar from '../../assets/pictures/Topbar.png';
import sun from '../../assets/pictures/sun.png';
import moon from '../../assets/pictures/moon.png';
import { useState, useEffect } from 'react';
const Navbar = () => {
    const [sideInputTheme, setSideInputTheme] = useState(false);
    // const allDatas = datasMovies.concat(datasTVs);
    // console.log('allDatas : ', allDatas);

    const handleClick = () => {
        setSideInputTheme(sideInputTheme => !sideInputTheme);
    }



    return (
        <section className='topbar'>
            <img src={Topbar} alt="Topbar" className='topbar-img' />
            <Link to="/">
                <h1 className="logo">devjobs</h1>
            </Link>
            <div className='toggle-button'>
                <img src={sun} alt="sun" className='sun' />
                <label className="switch">
                    <input type="checkbox" checked={sideInputTheme} onClick={handleClick} />
                    <span class="slider"></span>
                </label>
                <img src={moon} alt="moon" className='moon' />
            </div>


        </section>
    );
};
export default Navbar;
