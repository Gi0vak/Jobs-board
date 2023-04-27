import './index.css';
import JobCards from '../../components/JobCards';
import Topbar from '../../components/Topbar';

const Single = () => {



    return (
        <section className="New-single">
            <Topbar />
            <section className="new-single-body">
                <JobCards />
            </section>

        </section>
    );
};

export default Single;
