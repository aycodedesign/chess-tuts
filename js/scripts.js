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

function sect5_onStage() {
	if ($('#sect5 .inview-block').is(':in-viewport')) {
		$('#sect5 img.exige').removeClass('offstage');
	}
	else {
		$('#sect5 img.exige').addClass('offstage');
	}
}

$(window).scroll(sect1_onStage);

$(window).scroll(sect2_onStage);

$(window).scroll(sect3_onStage);

$(window).scroll(sect4_onStage);

$(window).scroll(sect5_onStage);
