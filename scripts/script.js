$(document).ready(function(){
	$('#first-button').on('click', function() {
		$('#overlay').removeClass('hidden');
		$('#first-popup').removeClass('hidden');
	})
	$('#overlay').on('click', function() {
		$('#overlay').addClass('hidden');
		$('#first-popup').addClass('hidden');
	})
	$('#first-popup__button').on('click', function() {
		$('#overlay').addClass('hidden');
		$('#first-popup').addClass('hidden');
	})

	$('#second-button').on('click', function() {
		$('#overlay').removeClass('hidden');
		$('#second-popup').removeClass('hidden');
	})
	$('#overlay').on('click', function() {
		$('#overlay').addClass('hidden');
		$('#second-popup').addClass('hidden');
	})
	$('#second-popup__button').on('click', function() {
		$('#overlay').addClass('hidden');
		$('#second-popup').addClass('hidden');
	})

	$('#third-button').on('click', function() {
		$('#overlay').removeClass('hidden');
		$('#third-popup').removeClass('hidden');
	})
	$('#overlay').on('click', function() {
		$('#overlay').addClass('hidden');
		$('#third-popup').addClass('hidden');
	})
	$('#third-popup__button').on('click', function() {
		$('#overlay').addClass('hidden');
		$('#third-popup').addClass('hidden');
	})

	$('#fourth-button').on('click', function() {
		$('#overlay').removeClass('hidden');
		$('#fourth-popup').removeClass('hidden');
	})
	$('#overlay').on('click', function() {
		$('#overlay').addClass('hidden');
		$('#fourth-popup').addClass('hidden');
	})
	$('#fourth-popup__button').on('click', function() {
		$('#overlay').addClass('hidden');
		$('#fourth-popup').addClass('hidden');
	})

	$('#fifth-button').on('click', function() {
		$('#overlay').removeClass('hidden');
		$('#fifth-popup').removeClass('hidden');
	})
	$('#overlay').on('click', function() {
		$('#overlay').addClass('hidden');
		$('#fifth-popup').addClass('hidden');
	})
	$('#fifth-popup__button').on('click', function() {
		$('#overlay').addClass('hidden');
		$('#fifth-popup').addClass('hidden');
	})
})