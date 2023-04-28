import './index.css';
import JobCards from '../../components/JobCards';
import Topbar from '../../components/Topbar';
import SearchBar from '../../components/Searchbar';
import SearchbarMobile from '../../components/SearchbarMobile';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { GetJobs } from '../../API/api';
import { Link } from 'react-router-dom';
const Home = ({ theme, bodytheme }) => {
    const [getJobs, setGetJobs] = useState([]);
    const [n, setN] = useState(12);

    //fonctions qui récupère toutes les données de la collection jobs et coupé en fonction de n (nombre de jobs par page)
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
    //fonction qui change le nombre de jobs par page(+12)
    const handleMore = (e) => {
        e.preventDefault()
        setN(n => n + 12);
        setGetJobs(getJobs.slice(0, n));
    }
    //fonction passée en props qui r�cupère toutes les données de la collection jobs modifiées par la recherche
    const handleSearch = (dataSearch) => {
        setGetJobs(dataSearch)
    }
    return (
        <>
            {/* Home component */}
            <div className={`Home ${bodytheme}`}>
                {/* Topbar component */}
                <div className="relative">
                    <Topbar />
                </div>

                {/* Media query for search bar */}
                <Media query="(max-width: 780px)">
                    {/* Render mobile search bar if screen is smaller than 780px */}
                    {matches => matches ? <SearchbarMobile handleSearch={handleSearch} /> : <SearchBar handleSearch={handleSearch} />}
                </Media>

                {/* Admin button */}
                <Link to="/admin" >
                    {/* Button component */}
                    <button className='button-one admin-btn'>
                        Admin
                    </button>
                </Link>

                {/* Job cards */}
                <JobCards datas={getJobs} handleMore={handleMore} admin="false" theme={theme} />
            </div>
        </>


    );
};
export default Home;
