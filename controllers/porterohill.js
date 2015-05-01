var Project = require('../models/Project.js')

exports.getProject = function(req, res) {
	Project.find({name: 'Portero Hill'},function(err, docs){
		res.render('project', {
		    title: 'Portero Hill',
		    projects: docs
		  });
	})
};