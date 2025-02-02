import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])

    // this is not the best way to load data
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (

        <div>
            <div className="text-center">
                <h1 className="text-5xl">Featured Jobs: {jobs.length}</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="my-8 grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className=  {`text-center ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={()=> setDataLength(jobs.length)} className="btn my-6 py-3 px-5 text-white font-extrabold rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#9873FF] hover:to-[#7E90FE]">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;