import './index.css';
import JobCards from '../../components/JobCards';
import Topbar from '../../components/Topbar';
import SearchBar from '../../components/Searchbar';
import SearchbarMobile from '../../components/SearchbarMobile';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { GetJobs } from '../../API/api';
import { Link } from 'react-router-dom';
// import { DeleteJob } from '../../API/api';
import { UpdateJob } from '../../API/api';
const Home = () => {
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
    // const handleDelete = async (id) => {
    //     try {
    //         const res = await DeleteJob(id);
    //         console.log(res);

    //     } catch (error) {
    //         console.log(error);
    //     }
    //     console.log(id);
    // }

    return (
        <>

            <div className="Home">
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
                    admin="true" />
            </div>

        </>

    );
};
export default Home;
