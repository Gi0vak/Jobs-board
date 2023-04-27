import './index.css';
import JobCard from './JobCard';

import { useEffect, useState } from 'react';


const JobCards = ({ datas, handleMore }) => {


    return (
        <>
            <section className="cards">
                {datas && datas.map((el, index) => {

                    return (
                        <JobCard
                            key={index}
                            logo={el.logo}
                            postedAt={el.postedAt}
                            contract={el.contract}
                            company={el.company}
                            position={el.position}
                            location={el.location}
                            id={el._id} />)
                })}
            </section>
            <div className="btn-center">
                <button className="button-one" onClick={handleMore}>Load more</button>
            </div>
        </>


    );
};
export default JobCards;
