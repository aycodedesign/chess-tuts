console.log('BANGBANG');


// TRIGGERING THE ANIMATIONS

	// SECTION 1 ONLY

// function image_click() {
// 	$('#sect1 img.board').removeClass('offstage');
// }

// $('#sect1 img.board').click(image_click);


// 	// ALL IMAGES

// function all_image_click() {
// 	$(this).removeClass('offstage');	
// }
// $('.inview-block img').click(all_image_click);


// GET THE 'IN VIEWPORT' GOING

function sect1_onStage() {
	if ($('#sect1 .inview-block').is(':in-viewport')) {
		$('#sect1 img.board1').removeClass('offstage');
		$('#sect1 img.b-group').removeClass('offstage');
		$('#sect1 img.w-group').removeClass('offstage');
	}
	else {
		$('#sect1 img.board1').addClass('offstage');
		$('#sect1 img.b-group').addClass('offstage');
		$('#sect1 img.w-group').addClass('offstage');
	}
}

function sect2_onStage() {
	if ($('#sect2 .inview-block').is(':in-viewport')) {
		$('#sect2 img.board2').removeClass('offstage');
		$('#sect2 img.w-king').removeClass('offstage');
		$('#sect2 img.w-pawn').removeClass('offstage');

	}
	else {
		$('#sect2 img.board2').addClass('offstage');
		$('#sect2 img.w-king').addClass('offstage');
		$('#sect2 img.w-pawn').addClass('offstage');
	}
}

function sect3_onStage() {
	if ($('#sect3 .inview-block').is(':in-viewport')) {
		$('#sect3 img.board3').removeClass('offstage');
		$('#sect3 img.w-rook').removeClass('offstage');
		$('#sect3 img.w-bishop').removeClass('offstage');
	}
	else {
		$('#sect3 img.board3').addClass('offstage');
		$('#sect3 img.w-rook').addClass('offstage');
		$('#sect3 img.w-bishop').addClass('offstage');
	}
}

function sect4_onStage() {
	if ($('#sect4 .inview-block').is(':in-viewport')) {
		$('#sect4 img.board4').removeClass('offstage');
		$('#sect4 img.w-queen').removeClass('offstage');
		$('#sect4 img.w-knight').removeClass('offstage');
	}
	else {
		$('#sect4 img.board4').addClass('offstage');
		$('#sect4 img.w-queen').addClass('offstage');
		$('#sect4 img.w-knight').addClass('offstage');
	}
}

$(window).scroll(sect1_onStage);

$(window).scroll(sect2_onStage);

$(window).scroll(sect3_onStage);

$(window).scroll(sect4_onStage);


// PARALLAX

function parallax_move(theSection, posLeft, scrollSpeed) {

	var sectHowFar = theSection.offset().top;
	// shows how far user has scrolled, per scroll
	var scrollFromTop = $(window).scrollTop() + 100;

	var posTop = (scrollFromTop - sectHowFar) * scrollSpeed;
	
	// theSection.css('background-position', '-100px 600px, center center')
	theSection.css('background-position', posLeft + ' ' + posTop + 'px, center center')
	// console.log(theSection);
}


$(window).scroll(function () {
	parallax_move($('#sect1'), '750px', 0.3);
	parallax_move($('#sect2'), '-50px', 0.4);
	parallax_move($('#sect3'), '750px', 0.4);
	parallax_move($('#sect4'), '-50px', 0.4);
});
