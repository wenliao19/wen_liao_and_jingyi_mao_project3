const mongoose = require("mongoose")
const JobSchema = require('../schema/Job.Schema').JobSchema

const JobModel = mongoose.model("Job", JobSchema);

function insertJob(job) {
    return JobModel.create(job);
}

function getAllJobs() {
    return JobModel.find().exec();
}

function findJobByTitle(title) {
    return JobModel.find({title: new RegExp(title + ".*")})
}

function findJobById(id) {
    return JobModel.findById(id);
}

function findJobByIdAndUpdate(id, job){
    return JobModel.findByIdAndUpdate(id, {...job});
}

// Make sure to export a function after you create it!
module.exports = {
    insertJob,
    getAllJobs,
    findJobByTitle,
    findJobById,
    findJobByIdAndUpdate,
};