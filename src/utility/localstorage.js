const getStoredJobApplication = () => {
    const storedJobApplition = localStorage.getItem('job-applition');
    if (storedJobApplition) {
        return JSON.parse(storedJobApplition);
    }
    return [];
}


const saveJobApplication = id => {
    const storedJobApplitions = getStoredJobApplication();
    const exists = storedJobApplitions.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplitions.push(id);
        localStorage.setItem('job-applition', JSON.stringify(storedJobApplitions))
    }
}

export { getStoredJobApplication, saveJobApplication }