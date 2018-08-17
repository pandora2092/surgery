$(document).ready(function() {
	var owl = $(".slider");
	owl.owlCarousel({
    loop:true,
    nav:true,
    items:3,
    margin: 15,
   	navText: "",
   	responsive:{
	        0:{
	            items:1
	        },
	        830:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$(".next").click(function() {
		owl.trigger('next.owl.carousel');
	});
	$(".prev").click(function() {
		owl.trigger('prev.owl.carousel');
	});


	function face() {
		var vertical = $(window).scrollTop();
		if (vertical < 856) {
			$('.face').css("height", (856-vertical));
		}
		else if (vertical > 856) {
			$('.face').css("height", 0);
		}
	};

	$(window).scroll(face);
	face();

	function faceTwo() {
		var vertical = $(window).scrollTop();
		if (vertical < 2110) {
			$('.new-face').css("height", (2110-vertical));
		}
		else if (vertical > 2110) {
			$('.new-face').css("height", 0);
		}
	};

	$(window).scroll(faceTwo);
	faceTwo();


	//E-mail Ajax Send
	$("form-two").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
