$(document).ready(function() {
	localStorage.setItem('test3', '3');
	localStorage.setItem('lstest', 'Localstorage is working');
	$(".plocalstorage").text(localStorage.getItem('lstest'));
	
	sessionStorage.setItem('sstest', 'Sessionstorage is working');
	$(".psessionstorage").text(sessionStorage.getItem('sstest'));
});