$(document).ready(function() {
	//When page loads...
	$(".tabtext").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tabtext:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tabtext").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
	
	// The dumb slideshow	
	$(".slide:first").addClass("active");
	
	$("#next").click(function() {
		if ($(".slide.active").is(":last-child")) {
			return false
		} else {
			$(".slide.active").removeClass("active").next().addClass("active");
			return false;
			}
	});
	$("#prev").click(function() {
	
		if ($(".slide.active").is(":first-child")) {
			return false
		} else {
			$(".slide.active").removeClass("active").prev().addClass("active");
			return false;
			}
	});
	
	// The image slideshow
	$("#islideshow img").hide()
	$("#islideshow img:first").addClass("active").show();
	
	$("#inext").click(function() {
		if ($("#islideshow img.active").is(":last-child")) {
			return false
		} else {
			$("#islideshow img.active").fadeOut();
			$("#islideshow img.active").removeClass("active").next().addClass("active").fadeIn();
			return false;
			}
	});
	$("#iprev").click(function() {
	
		if ($("#islideshow img.active").is(":first-child")) {
			return false
		} else {
			$("#islideshow img.active").fadeOut();
			$("#islideshow img.active").removeClass("active").prev().addClass("active").fadeIn();
			return false;
			}
	});


});