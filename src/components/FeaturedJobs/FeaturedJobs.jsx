import { useEffect, useState } from "react";

const FeaturedJobs = () => {
const [jobs, setJobs]=useState([]);

useEffect(()=>{
fetch('jobs.json')
.then(res=>res.json())
.then(data=>setJobs(data));
}, [])

    return (
        <div className="mt-8">
         <h2 className="text-5xl text-center">Featured Jobs: {jobs.length}</h2>  
         <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
    );
};

export default FeaturedJobs;