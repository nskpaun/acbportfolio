var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
	name: String,
	slide: { type : Array , "default" : [] }
});

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;