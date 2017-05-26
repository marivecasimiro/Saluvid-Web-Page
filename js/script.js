$('.nav-wrapper ul li').click(function() {
  $(this).siblings('li').removeClass('active');
  $(this).addClass('active');
});	



if ($('#color-inicio').length) {
        ColorInicio = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= 0) {
                $('#color-inicio').addClass('active');
				$('#color-about').removeClass('active');
				$('#color-portfolio').removeClass('active');
				$('#color-testim').removeClass('active');
				$('#color-contact').removeClass('active');
            } 
        };
    ColorInicio();
    $(window).on('scroll', function () {
        ColorInicio();
    });
}



if ($('#color-about').length) {
        ColorAbout = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 1200) {
                $('#color-about').addClass('active');
				$('#color-inicio').removeClass('active');
				$('#color-portfolio').removeClass('active');
				$('#color-testim').removeClass('active');
				$('#color-contact').removeClass('active');
            } 
        };
    ColorAbout();
    $(window).on('scroll', function () {
        ColorAbout();
    });
}




if ($('#color-portfolio').length) {
        ColorPortfolio = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 1700) {
                $('#color-portfolio').addClass('active');
				$('#color-inicio').removeClass('active');
				$('#color-about').removeClass('active');
				$('#color-testim').removeClass('active');
				$('#color-contact').removeClass('active');
            } 
        };
    ColorPortfolio();
    $(window).on('scroll', function () {
        ColorPortfolio();
    });
}






if ($('#color-testim').length) {
        ColorTestim = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 2620) {
                $('#color-testim').addClass('active');
				$('#color-inicio').removeClass('active');
				$('#color-about').removeClass('active');
				$('#color-portfolio').removeClass('active');
				$('#color-contact').removeClass('active');
            } 
        };
    ColorTestim();
    $(window).on('scroll', function () {
        ColorTestim();
    });
}








if ($('#color-contact').length) {
        ColorContact = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 3500) {
                $('#color-contact').addClass('active');
				$('#color-inicio').removeClass('active');
				$('#color-about').removeClass('active');
				$('#color-portfolio').removeClass('active');
				$('#color-testim').removeClass('active');
            } 
        };
    ColorContact();
    $(window).on('scroll', function () {
        ColorContact();
    });
}












