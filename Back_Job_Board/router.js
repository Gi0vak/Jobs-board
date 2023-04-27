const router = require("express").Router();

const {
    getSearch,
    getJob,
    getJobs,
    createJob,
    updateJob,
    deleteJob } = require("./controllers/Job");

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

router.get("/api/search", getSearch);

router.get("/api/jobs", getJobs);

router.get("/api/jobs/:jobID", getJob);

router.post("/api/jobs", createJob);

router.put("/api/jobs/:jobID", updateJob);

router.delete("/api/jobs/:jobID", deleteJob);

module.exports = router;
