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
