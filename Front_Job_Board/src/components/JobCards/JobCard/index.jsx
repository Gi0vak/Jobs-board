import './index.css';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { DeleteJob } from '../../../API/api.js';


const JobCard = ({
    logo,
    postedAt,
    contract,
    company,
    position,
    location,
    admin,
    theme,
    id }) => {


    const TimeAgo = (date) => {
        const timeAgo = Moment(date).fromNow();
        return <>{timeAgo}</>;
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            const job = await DeleteJob(id)
            window.location.reload();
            console.log('the job withh this id is deleted', job);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="card-grid">
            <article className={`card ${theme}`}>
                {logo &&
                    (<img
                        src={logo}
                        className="card-job-logo"
                        alt="logo job" />
                    )}

                <h3 className="card-job-contract-postedAT">
                    {TimeAgo(postedAt)}
                    <span className='dot'> • </span>
                    {contract}
                </h3 >
                <Link className="card-link" to={`/jobs/${id}`}>
                    <h1 className="card-job-position">{position}</h1>
                </Link>
                <h3 className='card-job-company'>{company}</h3>
                <h3 className='card-job-location'>{location}</h3>

            </article >
            {admin === "true" &&
                <div className='delete-update'>
                    <Link to={`/updatejob/${id}`} >
                        <img src='https://i.postimg.cc/Qx37sJMg/update.png' alt="update job" className='update' />
                    </Link>
                    <img src="https://i.postimg.cc/25wvXbYd/delete.png" alt="trash job" className='delete' onClick={(e) => {

                        handleDelete(e, id)
                    }} />

                </div>}
        </section>
    );
};
export default JobCard;
