$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu/navbar scripe
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //media 
	$('.media-content').magnificPopup({
        delegate: 'a',
        type: 'image',
		gallery: {
			enabled: true
		}
    })
});