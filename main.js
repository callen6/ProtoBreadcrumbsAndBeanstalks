var Page = {
	setNavigationClicks: function () {
		$('.navigation-wrapper a').click(function(e) {
			if(!$(e.currentTarget).hasClass('direct-link')) {
			e.preventDefault();
			Page.scrollToSection($(e.currentTarget).attr('href'));
			}
		});
	},

	scrollTo: function(yValue) {
		$('html body').animate({
			'scrollTop':yValue
		}, 1000);
	},

	scrollToSection: function(sectionString) {
		var sectionClass = "." + sectionString;
		Page.scrollTo($(sectionClass).offset().top + 75);
	}

	// setProjectHover:function() {
	// 	$('.project').hover(function() {
	// 		$(this).find('img').first().transition({
	// 			scale: 1.2
	// 		})
	// 	}, function() {
	// 		$(this).find('img').first().transition({
	// 			scale: 1
	// 	});
	// });
};

$(function() {
	Page.setNavigationClicks();
	//Page.setProjectHover();
})