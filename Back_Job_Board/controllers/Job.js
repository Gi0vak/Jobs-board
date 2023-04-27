const Job = require("../model/Job");

const getJobs = (req, res) => {
    Job.find()
        .then((jobs) => {
            res.json(jobs);
            console.log('coucou');
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
const getSearch = async (req, res) => {
    const { position, contract, location, company } = req.query;
    try {
        const query = {};
        if (position) {
            query.position = position;
        }
        if (contract) {
            query.contract = contract;
        }
        if (location) {
            query.location = location;
        }
        if (company) {
            query.company = company;
        }
        const response = await Job.find(query)
        res.json(response)
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getJob = (req, res) => {
    Job.findOne(
        { _id: req.params.jobID })

        .then((jobs) => {
            res.json(jobs);

        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const createJob = (req, res) => {
    const job = new Job({
        id: req.body.id,
        company: req.body.company,
        logo: req.body.logo,
        logoBackground: req.body.logoBackground,
        position: req.body.position,
        postedAt: req.body.postedAt,
        contract: req.body.contract,
        location: req.body.location,
        website: req.body.website,
        apply: req.body.apply,
        description: req.body.description,
        requirements: req.body.requirements,
        role: req.body.role,
    });

    job
        .save()
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const updateJob = (req, res) => {
    console.log('reg.body', req.body);
    Job.findOneAndUpdate(
        { _id: req.params.jobID },
        {
            $set: {
                id: req.body.id,
                company: req.body.company,
                logo: req.body.logo,
                logoBackground: req.body.logoBackground,
                position: req.body.position,
                postedAt: req.body.postedAt,
                contract: req.body.contract,
                location: req.body.location,
                website: req.body.website,
                apply: req.body.apply,
                description: req.body.description,
                "requirements.content": req.body.requirements.content,
                "requirements.items": req.body.requirements.items,
                "role.content": req.body.role.content,
                "role.items": req.body.role.items,
            },
        },
        { new: true }
    )
        .then((job) => {
            res.json(job);
            console.log('update');
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const deleteJob = (req, res) => {
    Job.deleteOne(
        { _id: req.params.jobID })
        .then(() =>
            res.json({
                message: "Job Deleted"
            }))
        .catch((err) =>
            res.send(err)
        );
};

module.exports = {
    getSearch,
    getJob,
    getJobs,
    createJob,
    updateJob,
    deleteJob,
};
