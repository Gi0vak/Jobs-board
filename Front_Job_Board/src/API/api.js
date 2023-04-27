export const GetJobs = async () => {
    try {
        const response = await fetch(
            `http://localhost:8000/api/jobs`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const GetJob = async (id) => {
    try {
        const response = await fetch(
            `http://localhost:8000/api/jobs/${id}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const DeleteJob = async (id) => {

    if (id) {
        try {
            const response = await fetch(
                `http://localhost:8000/api/jobs/${id}`
                , {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify()
                });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Error : ', error);
        }
    }
}

export const GetSearch = async () => {
    try {
        const response = await fetch(`http://localhost:8000/api/search?`);
        const data = await response.json();
        console.log('getSearchData :', data);
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};


export const CreateJob = async (jobData) => {
    try {
        const response = await fetch(`http://localhost:8000/api/jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
        });
        const data = await response.json();
        console.log('createJob :', data);
        return data;
    } catch (error) {
        console.log('Error : ', error);
    }
};

export const UpdateJob = async (newjob, id) => {
    console.log('newjob :', newjob, id);
    try {
        const response = await fetch(`http://localhost:8000/api/jobs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newjob),
        });

    } catch (error) {
        console.log('Error : ', error);
    }
}

