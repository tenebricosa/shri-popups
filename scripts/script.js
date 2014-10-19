$(document).ready(function(){
	$('.page-button').on('click', function() {
		$('#overlay').removeClass('hidden');
		$('#' + $(this).data('for')).removeClass('hidden');
	})
	$('.popup-button').on('click', function() {
		$('#overlay').addClass('hidden');
		$(this).parents('.popup').addClass('hidden');
	})
	$('#overlay').on('click', function() {
		$(this).addClass('hidden');
		$('.popup').addClass('hidden');
	})

	$('.page-button-new').on('click', function() {
		$('#' + $(this).data('for')).removeClass('hidden')
			.find('.overlay').removeClass('hidden');
	})
	$('.new-popup-button').on('click', function() {
		$(this).parents('.new-container').addClass('hidden');
	})
	$('.overlay').on('click', function() {
		if (!$(this).is(':visible'))
			return;
		$(this).addClass('hidden');
		$('.new-container').addClass('hidden');
	})
})
