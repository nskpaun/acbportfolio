var Project = require('../models/Project.js')

exports.getForm = function(req, res) {
	res.render('projectform', {
	    title: 'New Project'
	  });
};

exports.postProject = function(req, res, next) {
	var project = new Project({
		name: req.body.pname,
		slide: [{
			text: req.body.ptext,
			image: req.body.purl
		}]
	});

	project.save(function(err) {
		if (err) return next(err);
		res.redirect('/');
	})
};