$(document).ready(function() {
	$('.hero__button').on('click', function() {
		$('.hero').fadeOut(700);
		setTimeout(() => {
			$('.choice').addClass('choice-active');
		}, "700");
	})
})