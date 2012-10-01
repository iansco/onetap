$(document).ready(function() {
	
	// Corrects the text in links to common Actions
	$('ol li ol li li a').each(function() { 
	    var title = $(this).attr('title');  
	    $(this).text(title); 
	});
	
	// Adds an id to the first ordered list element
	$('ol').first().attr('id','root');
	
	// Creates the link which toggles child list elements  	
  	var $toggleLink = $('<a></a>', 
	    { 
	    "href" : "#",
	    "class" : "toggle",
	    text : "",
	    click: function() {
	  		event.preventDefault();
	  		$(this).next('ol').slideToggle('fast');
	  		$(this).toggleClass('show');
	        }
	    });	    
	
	// Prepends the toggle link to each ordered list      	  	
  	$('li').has('ol').each(function(i) {
		$(this).find('ol').first().addClass('toggleParent');
		var $toggleLink = $('<a></a>', 
		  { 
		  "href" : "#",
		  "class" : "toggle",
		  "id" : "tg" + i,
		  text : "",
		  click: function() {
				event.preventDefault();
				$(this).nextAll('ol').first().slideToggle('fast');
				$(this).toggleClass('show');
		      }
		  });	    
  		$(this).prepend($toggleLink);
  	});
  	
	// If the target of a link to a common Action is hidden, show the element, scroll to it, and highlight it
  	$('a').each(function() {
		var linkHash = $(this).attr('href');
		if (typeof linkHash !== 'undefined' && linkHash !== false && linkHash !== "#") {
			$(this).click(function(event) {
				event.preventDefault();
				$(linkHash).parents().filter(':hidden').show();
				$(this.hash).parent('li').effect("highlight", {}, 1500);
				$(this.hash).parents('li').not(':first').children('a').removeClass('show');
				$('html,body').animate({scrollTop:$(this.hash).offset().top + 100}, 500);
			});				
		};
  	});
  	
  	// Hide list elements by default
  	$('ol.toggleParent').slideToggle('fast');  	
  	$('a.toggle').addClass('show');
  	
  	// Set classes on certain keywords
  	// Classes for COMMON, AND, and AND/OR badges.
	$('strong').filter(function() { return $(this).text() == "COMMON"; }).addClass("common");
	$('strong').filter(function() { return $(this).text() == "OR"; }).addClass("or");	
	$('strong').filter(function() { return $(this).text() == "AND/OR"; }).addClass("and-or");	
  	// Classes for empty OR's.
	$('li').filter(function() { return $(this).text() == "OR"; }).addClass("or");
});


