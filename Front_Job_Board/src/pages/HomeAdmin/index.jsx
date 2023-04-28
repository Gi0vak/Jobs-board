import './index.css';
import JobCards from '../../components/JobCards';
import Topbar from '../../components/Topbar';
import SearchBar from '../../components/Searchbar';
import SearchbarMobile from '../../components/SearchbarMobile';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { GetJobs } from '../../API/api';
import { Link } from 'react-router-dom';
import { UpdateJob } from '../../API/api';
const Home = ({ theme, bodytheme }) => {
    const [getJobs, setGetJobs] = useState([]);
    const [n, setN] = useState(12);


    useEffect(() => {
        const awaitJobs = async () => {
            try {
                const data = await GetJobs();
                const dataOrder = await data.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
                setGetJobs(dataOrder.slice(0, n));
                console.log('first data : ', getJobs);
            }
            catch (error) {
                console.log('Error : ', error);
            }
        }
        awaitJobs();
    }, [n]);

    const handleMore = (e) => {
        e.preventDefault()
        setN(n => n + 12);
        setGetJobs(getJobs.slice(0, n));
    }
    const handleUpdate = async (id) => {
        try {
            const res = await UpdateJob(id)
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }
    console.log('theme : ', theme);
    return (
        <>
            <div className={`Home ${bodytheme}`}>
                <div className="relative">
                    <Topbar />
                </div>
                <Link to="/newjob" >
                    <button className='button-one add-job-btn'>
                        Add a job
                    </button>
                </Link>
                <Media query="(max-width: 780px)">
                    {matches => matches ? <SearchbarMobile /> : <SearchBar />}
                </Media>
                <JobCards
                    datas={getJobs}
                    handleMore={handleMore}
                    // handleDelete={handleDelete} 
                    handleUpdate={handleUpdate}
                    admin="true"
                    theme={theme} />
            </div>

        </>

    );
};
export default Home;
