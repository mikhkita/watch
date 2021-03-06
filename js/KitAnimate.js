var custom = [];
$(document).ready(function(){	

	// if( device.mobile() || device.tablet() ){
	// 	$(".anim").each(function(){
	// 		var $this = $(this);
	// 			if( $this.attr("data-func") ){
	// 				custom[$this.attr("data-func")]($this);
	// 			}
	// 			$this.removeClass($this.attr("data-anim")).addClass($this.attr("data-anim")+"-show");
	// 	});
	// }else{
		var myWidth, myHeight;

		function whenScroll(){
			var scroll = ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop)+myHeight;
			$(".anim").each(function(){
				var tmp = ( $(this).attr("data-cont") )?$($(this).attr("data-cont")):$(this),
					offset = ( tmp.attr("data-offset") )?tmp.attr("data-offset"):tmp.height()/2;
				if( tmp.offset().top < scroll-offset ){
					var $this = $(this);
					setTimeout(function(){
						if( $this.attr("data-func") ){
							custom[$this.attr("data-func")]($this);
						}
						if( $this.attr("data-svg") ){
							document.getElementById($this.attr("data-svg")).beginElement();
						} 
						if( $this.attr("data-anim") ){
							$this.addClass($this.attr("data-anim")+"-show");
						}
					},$(this).attr("data-delay")*1);
					$(this).removeClass("anim");
				}
			});
		}

	  	function resize(){
	  		if( typeof( window.innerWidth ) == 'number' ) {
				myHeight = window.innerHeight;
			} else if( document.documentElement && ( document.documentElement.clientWidth || 
			document.documentElement.clientHeight ) ) {
				myHeight = document.documentElement.clientHeight;
			} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
			  	myHeight = document.body.clientHeight;
			}
	  	}
	  	$(window).resize(resize);
	  	resize();
	  	$(window).scroll(whenScroll);
		whenScroll();
	// }

});