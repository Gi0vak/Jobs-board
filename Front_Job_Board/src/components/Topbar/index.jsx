import './index.css';
import { Link } from 'react-router-dom';
import Topbar from '../../assets/pictures/Topbar.png';
import sun from '../../assets/pictures/sun.png';
import moon from '../../assets/pictures/moon.png';
import { ThemeContext } from '../../ThemeContext';
import { useContext } from 'react';

const Navbar = () => {

    const { toggleTheme, theme } = useContext(ThemeContext);


    return (
        <section className={`topbar`} >
            <img src={Topbar} alt="Topbar" className='topbar-img' />
            <Link className="logo" to="/">
                <h1 >devjobs</h1>
            </Link>
            <div className='toggle-button'>
                <img src={sun} alt="sun" className='sun' />
                <label className="switch">
                    <input type="checkbox" onClick={toggleTheme} checked={theme == "dark" ? true : false} />
                    <span class="slider"></span>
                </label>
                <img src={moon} alt="moon" className='moon' />

            </div>


        </section >
    );
};
export default Navbar;
