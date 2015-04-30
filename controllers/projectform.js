var Project = require('../models/Project.js')

exports.getForm = function(req, res) {
	res.render('projectform', {
	    title: 'New Project'
	  });
};

exports.postProject = function(req, res, next) {
	var slides = [];
	var texts = req.body.ptext;
	var urls = req.body.purl;
	for (i = 0; i < texts.length; i ++) {
		var ptext = req.body.ptext[i];
		var purl = req.body.purl[i];
		if (purl.length > 0 && ptext.length > 0) {
			slides.push({
				text: req.body.ptext[i],
				image: req.body.purl[i]
			})
		}
	}
	var project = new Project({
		name: req.body.pname,
		slide: slides
	});

	project.save(function(err) {
		if (err) return next(err);
		res.redirect('/');
	})
};