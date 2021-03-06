//LAZY LOAD 

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
		img.removeAttribute('data-src');
	};
});

//GENERAL TERMS FOR TRANSITION

$(document).ready(function() {
	
$("body").removeClass("bg")	
$('.sliding').delay(700).removeClass('sliding');
$('.hidden').fadeIn(300).removeClass('hidden');
$(".header p").css("transform", "translate(0, 0)")	
$(".title p").css("transform", "translate(0, 0)")				
 $('.linkfade').fadeIn(1000);
 
$(".about.button.inproject").addClass("back");

});

$(function(){
    $("a").click(function(EVENT){
		event.preventDefault();
	    var url = $(this).attr('href');
	           setTimeout(function(){
	               window.location.href = "" + url;
	           }, 1000);
    });
    
});

//TO ABOUT FROM HOME

$(".toabout").click(function(){
	 $(".title.button").css("transform", "translate(-500px, 0px)")
	$(".contentgrid").delay(300).fadeOut();
	$(".linkfade").delay(300).fadeOut();	
	
})


//ABOUT TO HOME

$(".tohome").click(function(){
	$(".header").addClass("transit")	
	$(".main").fadeOut();
			  
	$(".linkfade").delay(300).fadeOut();
    $('.visible').fadeOut().removeClass('visible');	
	$(".header p").delay(300).css("transform", "translate(1500px, -0)")		
	$(".header").fadeOut();
	

})

//HOME TO PROJECT
$(".projectlink").click(function(){
	$("body").addClass("bg")
	$(".title.button").css("transform", "translate(-500px, 0px)")
	$(".contentgrid").delay(300).fadeOut();
	$(".linkfade").delay(300).fadeOut();	
	
})

//PROJECT TO HOME

$(".tohome2").click(function(){
	$(".title p").delay(300).css("transform", "translate(-1500px, -0)")	
	$(".visible").delay(300).fadeOut();
	$(".linkfade").delay(300).fadeOut();	
	$(".about.button.inproject").removeClass("back");
	
	
})



//SCROLL-EFFEKTER



	$('.description').on('click',function(){
		//DESKTOP
		if($(window).width()>900){
			if($(this).attr('data-click-state') == 1) {
				$(this).attr('data-click-state', 0)
				$(".description p").fadeOut();	
				$(this).delay(10000).removeClass("equalize")
				$(".pictureslider").removeClass("equalize")	
				$("span.cross").css("transform","rotate(0)")
				$(".pictureslider").addClass("scrollable")
			
			} else {
				$(this).attr('data-click-state', 1)
				$(this).addClass("equalize")
				$(".pictureslider").addClass("equalize")
				$(".pictureslider").removeClass("scrollable")
				$("span.cross").css("transform","rotate(45deg)")
				$(".description p").delay(800).fadeIn();
				$(".title").css("font-size","8vw")
				$(".about").removeClass("shrink")
    	
				}
			//MOBILE
		} else {
			
			if($(this).attr('data-click-state') == 1) {
				
				$(this).attr('data-click-state', 0)
				$(this).css("height","auto")
				$(".description p").hide();	
				$(".pictureslider").show();
				
				//$(this).delay(10000).removeClass("equalize")
				//$(".pictureslider").removeClass("equalize")	
				$("span.cross").css("transform","rotate(0)")
				//$(".pictureslider").addClass("scrollable")
			
			} else {
				
				$(this).attr('data-click-state', 1)
				$(this).css("height","100%")
				$(".pictureslider").hide();
				$(".description p").show();	
				
				
				//$(this).addClass("equalize")
				//$(".pictureslider").addClass("equalize")
				//$(".pictureslider").removeClass("scrollable")
				$("span.cross").css("transform","rotate(45deg)")
				//$(".description p").delay(800).fadeIn();
				//$(".title").css("font-size","8vw")
				//$(".about").removeClass("shrink")
    	
				}
			
			
		}

	});
	
//RESIZE HEADER
	
	//MOBILE VS DESKTOP
	
			
			$(".scrollable").scroll(function(){
		
				var scroller = $(".scrollable").scrollTop();
				console.log(scroller);
				
				if($(window).width()>900){
		
					if (scroller > 0) { 
						$(".header").css("font-size","2.5vw")
						$(".about").addClass("shrink")
			    	
						$(".title.button").css("transform", "translate(-500px, 0px)")
			    	
			    	
		        	
						} else {
						$(".title.button").css("transform", "translate(0px, 0px)")
			    	
						$(".header").css("font-size","8.5vw")
						$(".about").removeClass("shrink")
					
		        	
					}
				} else {
					$(".header").css("font-size","8.5vw")
				}
			})
			

		
		

	
		
		
		

	
	$(document).scroll(function(){
		
		var scrollStart = $(document).scrollTop();
		//console.log(scroller);
		
		if (scrollStart > 0) { 
			
			$(".title.button").css("transform", "translate(-500px, 0px)")
			
			
		
			} else {
			$(".title.button").css("transform", "translate(0px, 0px)")
			
				
		
		}
	})
	

	
	
//
