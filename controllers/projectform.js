var Project = require('../models/Project.js')

exports.getForm = function(req, res) {
	res.render('projectform', {
	    title: 'New Project'
	  });
};

exports.postProject = function(req, res, next) {
	var slides = [];
	var subtitles = req.body.psubtitle;
	var urls = req.body.purl;
	var descriptions = req.body.pdescription;
	
	for (i = 0; i < subtitles.length; i ++) {
		var psubtitle = subtitles[i];
		var purl = urls[i];
		var pdescription = descriptions[i];
		if (purl.length > 0 && psubtitle.length > 0) {
			slides.push({
				subtitle: psubtitle,
				description: pdescription,
				image: purl
			});
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