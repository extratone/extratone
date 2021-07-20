$(document).ready(function() {
	$("b.popuplink").click(function() {
		// window.opener.postMessage($(this).text(), '*');
		localStorage.setItem('results', $(this).text()); 
		$(this).text("You clicked " + $(this).text());
		return false;
	});	
	
	$("b.mpopuplink").click(function() {
		window.opener.postMessage($(this).text(), '*');
		$(this).text("You clicked " + $(this).text());
		return false;
	});
	
	$("a.close").click(function() {
	// window.close();
	// return false
	});
	
	$(".sresults").click(function() {
	$(this).text("You clicked on " + localStorage.getItem('results'));
	});
	
	function messageReceive(evt) {
		localStorage.setItem('results', evt.data); 
		$(".results").text("You clicked " + evt.data);
	}
	window.addEventListener('message', messageReceive, false);
	
	
	localStorage.setItem('lstest', 'Localstorage is working');
	localStorage.setItem('test2', '2');
	$(".localstorage").text(localStorage.getItem('lstest'));
	
	sessionStorage.setItem('sstest', 'Sessionstorage is working');
	$(".sessionstorage").text(sessionStorage.getItem('sstest'));
	
	$("a.opener").click(function() {
	window.open("popup2.html", "popup2");
	return false;
	});
});