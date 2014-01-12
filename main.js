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
	},

};

$(function() {
	Page.setNavigationClicks();
});