var Project = require('../models/Project.js')

exports.getProject = function(req, res) {
	Project.find(function(err, docs){
		res.render('project', {
		    title: 'Portero Hill',
		    projects: docs
		  });
	})
  
};