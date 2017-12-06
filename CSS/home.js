// When the user load the page, the element slides up
$(document).scroll(function(){
	  $(".slideanim-pic").each(function(){
	    var pos = $(this).offset().top;
	     $(this).addClass("slide");
	  });
});

$(document).ready(function(){
	  $(".slideanim-text").each(function(){
	    var pos = $(this).offset().top;
	     $(this).addClass("slide");
	  });
	  $('.headerclass').addClass('animated slideInUp');

// When the user click on show me the answer button, show the drop down answer
$('.top').on('click', function() {
	$parent_box = $(this).closest('.box');
	$parent_box.siblings().find('.bottom').hide();
	$parent_box.find('.bottom').toggle();
});
});


// When the user scrolls down 80px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

