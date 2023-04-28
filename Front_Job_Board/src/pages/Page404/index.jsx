import './index.css';
import Footer from '../../components/Footer';
import Topbar from '../../components/Topbar';

const Page404 = ({ theme, bodytheme }) => {

    return (
        <section className={`notfound ${bodytheme}`}>
            <Topbar />

            <section className={`notfound-body ${theme}`}>
                <h1>404 !!!!!!</h1>
            </section>
            <Footer />
        </section>
    );
};

export default Page404;
