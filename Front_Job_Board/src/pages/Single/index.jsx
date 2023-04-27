import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetJob } from '../../API/api';
import Moment from 'moment';
const Single = () => {
    //#on met un useEffect avec un fetch qui recupere l id
    const { jobID } = useParams();
    console.log(parseInt(jobID));
    const [getJob, setGetJob] = useState([]);

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
    console.log(getJob);

    const TimeAgo = (timestamp) => {
        const timeAgo = Moment(timestamp).fromNow();
        return <>{timeAgo}</>;
    }
    return (
        <>
            <Topbar />
            <div className="Single">
                {getJob.role && (
                    <section className="single-body">
                        <div className="single-header">
                            <img src={getJob.logo} alt="logo job" />
                            <div className="single-header-company">
                                <h1>{getJob.company}</h1>
                                <p>{getJob.website}</p>
                            </div>
                            <button className="button-two">
                                Company Site
                            </button>
                        </div>
                        <article className='single-article'>
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
                        </article>

                    </section>
                )}

            </div>
            <Footer />
        </>
    )

};

export default Single;
