import './index.css';
import JobCards from '../../components/JobCards';
import Topbar from '../../components/Topbar';
import SearchBar from '../../components/Searchbar';
import SearchbarMobile from '../../components/SearchbarMobile';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { GetJobs } from '../../API/api';
import { Link } from 'react-router-dom';
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
    return (
        <>

            <div className="Home">
                <div className="relative">
                    <Topbar />
                </div>

                <Media query="(max-width: 780px)">
                    {matches => matches ? <SearchbarMobile /> : <SearchBar />}
                </Media>
                <Link to="/admin" >
                    <button className='button-one admin-btn'>
                        Admin
                    </button>
                </Link>
                <JobCards datas={getJobs} handleMore={handleMore} admin="false" />
            </div>

        </>

    );
};
export default Home;
