import './index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
const Footer = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            <section className={`Footer ${theme}`}>
                <div className='footer-left'>
                    <h3>Senior Software Engineer</h3>
                    <p>So Digital Inc.</p>
                </div>
                <div className='footer-right'>
                    <button className='button-one footer-btn'>Apply Now</button>
                </div>
            </section>
        </>
    )
};
export default Footer;