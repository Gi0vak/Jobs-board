import './index.css';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { DeleteJob } from '../../../API/api.js';
const { useEffect, useState } = require('react');


const JobCard = ({
    logo,
    postedAt,
    contract,
    company,
    position,
    location,
    admin,
    handleUpdate,
    //handleDelete,
    id }) => {


    const TimeAgo = (timestamp) => {
        const timeAgo = Moment(timestamp).fromNow();
        return <>{timeAgo}</>;
    }

    return (
        <article className='card'>
            {logo &&
                (<img
                    src={logo}
                    className="card-job-logo"
                    alt="logo job" />
                )}
            {admin == "true" && <button
            //onClick={handleDelete(id)}
            >delete</button>}
            {admin == "true" && <Link to={`/updatejob/${id}`} ><button>update</button></Link>}
            <h3 className="card-job-contract-postedAT">
                {TimeAgo(postedAt)}<span className='dot'> • </span>{contract}
            </h3 >
            <Link className="card-link" to={`/jobs/${id}`}>
                <h1 className="card-job-position">{position}</h1>
            </Link>
            <h3 className='card-job-company'>{company}</h3>
            <h3 className='card-job-location'>{location}</h3>

        </article >

    );
};
export default JobCard;
