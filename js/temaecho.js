$(document).ready(function() {

	$('.header-time-a').hover(
		function() {
			var currentPlayer = $(this);

			currentPlayer.siblings().each(function() {
				$(this).addClass('fadeout');
			});
		},
		function() {
			var currentPlayer = $(this);

			currentPlayer.siblings().each(function() {
				$(this).removeClass('fadeout');
			});
		}
	);

});