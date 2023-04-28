import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetJob } from '../../API/api';
import { useNavigate } from 'react-router-dom';
import Moment from 'moment';
import { Link } from 'react-router-dom';
const Single = ({ theme, bodytheme, admin }) => {
    const navigate = useNavigate();
    const { jobID } = useParams();
    console.log(parseInt(jobID));
    const [getJob, setGetJob] = useState([]);
    //fonction qui recupere les données d'un job correspondant au jobID fournit par le useParams
    useEffect(() => {

        const singleJob = async () => {
            try {
                const data = await GetJob(jobID);
                const theSingle = await data;
                setGetJob(theSingle)
                console.log(theSingle);
            }
            catch (error) {
                console.log('Error : ', error);
            }
        }
        { getJob && singleJob() }
    }, [jobID]);

    const TimeAgo = (timestamp) => {
        const timeAgo = Moment(timestamp).fromNow();
        return <>{timeAgo}</>;
    }
    const handleUpdate = (e, jobID) => {
        e.preventDefault();
        navigate(`/updatejob/${jobID}`);
    }
    const handleDelete = (e, jobID) => {
        e.preventDefault();
        console.log(jobID);;
    }
    return (
        <>
            <Topbar />
            <div className={`Single ${bodytheme}`}>
                <div className='back-home'>
                    <Link to="/">retour</Link>
                </div>
                {getJob.role && (
                    <section className="single-body">
                        <div className={`single-header ${theme}`}>
                            <img src={getJob.logo} alt="logo job" />
                            <div className="single-header-company">
                                <h1>{getJob.company}</h1>
                                <p>{getJob.website}</p>
                            </div>
                            <button className="button-two">
                                Company Site
                            </button>
                        </div>
                        <article className={`single-article ${theme}`}>
                            <section className='single-article-apply'>
                                <div>
                                    <p>{TimeAgo(getJob.postedAt)} . {getJob.contract}</p>
                                    <div className="single-pos-loc">
                                        <h1>{getJob.position}</h1>
                                        <h3 className='single-location'>{getJob.location}</h3>
                                    </div>
                                </div>
                                <div className="single-btn-apply">
                                    <button className="button-one single-article-btn">Apply Now</button>
                                </div>
                            </section>
                            <p>{getJob.description}</p>
                            <h1>Requirements</h1>
                            <p>{getJob.requirements.content}</p>
                            <ul>{getJob.requirements.items.map(el => <li><p>{el}</p></li>)}</ul>
                            <h1>What You Will Do</h1>
                            <p>{getJob.role.content}</p>
                            <ol>
                                {getJob.role.items.map(el => <li><p>{el}</p></li>)}
                            </ol>
                            <div className='single-buttons'>
                                <button className='button-one' onClick={((e) => { handleUpdate(e, jobID) })}>update</button>
                                <button className='button-two' onCliCk={((e) => { handleDelete(e, jobID) })}>delete</button>
                            </div>
                        </article>

                    </section>
                )}

            </div>
            <Footer />
        </>
    )

};

export default Single;
