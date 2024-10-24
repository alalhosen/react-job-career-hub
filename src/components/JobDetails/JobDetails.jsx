import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    return (
        <div>
            <h2>Job Details of:{id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3"></div>
                <div className="border"></div>
            </div>
        </div>
    );
};

export default JobDetails;